import { elements } from './js/views/base.js';
import Contact from './js/models/Contact.js';
import List from './js/models/List.js';
import * as saveView from './js/views/saveView.js';
import * as editView from './js/views/editView.js';
import * as contactView from './js/views/contactView.js';
import * as listView from './js/views/listView.js';

let state = {};
let newContact = {};

const toggleView = () => {

	//bring up edit contact screen
	contactView.toggleDisplay();
	saveView.toggleDisplay();
};

const setEventHandlers = () => {

	// ADD CONTACT BUTTON
	elements.addBtn.addEventListener('click', e => {
		saveView.toggleSaveView();
	});

	// SAVE CONTACT DETAILS BUTTON
	let savedContact;
	elements.saveBtn.addEventListener('click', () => {

		// save contact information to variable
		savedContact = saveView.saveContactInfo();

		// create new contact object
		state.contact = new Contact(savedContact.name, savedContact.number, savedContact.email);

		// add contact to "list" database
		state.list.addContactToList(state.contact);

		// show contact card view and clear fields
		saveView.clearFields();
		contactView.clearFields();
		contactView.toggleContactView();
		contactView.displayContactInfo(state.contact);

		// clear contact list and render new list
		listView.clearListField();	
		listView.renderListAll(state.list.contacts);
	});

	// SAVE EDIT BUTTON
	elements.saveEditBtn.addEventListener('click', () => {
		const newData = editView.saveEdit(state.selectedContact.id, state.list);
		state.list.persistData();
		listView.toggleListView();
	})

	// CLOSE BUTTON (SAVE VIEW)
	elements.closeBtn.addEventListener('click', () => {
		listView.toggleListView();
	});

	// CLOSE BUTTON (EDIT VIEW)
	elements.closeEditBtn.addEventListener('click', () => {
		listView.toggleListView();
	})
	// CONTACT LIST ENTRIES
	elements.listContainer.addEventListener('click', e => {
		if (e.target.matches('.name-entry *')) {

			// get the selected contact index from List
			const selectedID = e.target.parentNode.dataset.id;
			state.selectedContact = state.list.isSelected(selectedID);

			// display user info in contact view
			contactView.clearFields();
			contactView.displayContactInfo(state.selectedContact);
			contactView.toggleContactView();
		};
	});

	//DELETE BUTTON
	elements.deleteBtn.addEventListener('click', () => {
		state.list.removeContact(state.selectedContact.id);
		listView.clearListField();
		listView.renderListAll(state.list.contacts);
		listView.toggleListView();
	});

	// EDIT BUTTON 
	elements.editBtn.addEventListener('click', () => {
		editView.toggleEditView();
		editView.importContactDetails(state.selectedContact);
	});

	// CROSS BUTTON
	elements.crossBtn.addEventListener('click', () => {
		listView.toggleListView();
	});

	// SEARCH BUTTON
	elements.searchBtn.addEventListener('click', () => {
		state.list.searchList(elements.searchField.value);
		listView.clearListField();
		listView.renderListAll(state.list.searchedResults);
		listView.toggleSearchBar();
		listView.toggleDisplayAddBtn();
	});

	// BACK BUTTON
	elements.backBtn.addEventListener('click', () => {
		listView.clearListField();
		listView.renderListAll(state.list.contacts);
		listView.toggleSearchBar();
		listView.clearSearchField();
		listView.clearSearchResults(state.list.searchedResults);
		listView.toggleDisplayAddBtn();
	});
};

const loadLocalStorage = () => {
	window.addEventListener('load', () => {
		state.list = new List();
		state.list.loadStorage();
		listView.renderListAll(state.list.contacts);
	});
};

const init = () => {
	setEventHandlers();
	loadLocalStorage();
};


init();


/* TO DO (quality-of-life features)

Test update for github

Display "no search results" when... no search results.

Required entries in input fields when saving contact

Change all instances of "number" to "mobile".

Make scroll bar scalable

Message to confirm delete contact

Make searched contacts appear in list as you type in the search field

*/