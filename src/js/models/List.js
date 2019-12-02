import Contact from './Contact.js';


export default class List {
	constructor () {
		this.contacts = [];
		this.searchedResults = [];
	};

	addContactToList(contact) {
		this.contacts.push(contact);
		this.persistData();
	};

	removeContact(id) {
		const index = this.contacts.findIndex(el => el.id === id);
		this.contacts.splice(index, 1);
		this.persistData();
	};

	// method to select a contact and display it in contact view
	isSelected (id) {
		const index = this.contacts.findIndex(el => el.id === id);
		return this.contacts[index];
	};

	persistData() {
		this.contacts = this.sortAlphabetically(this.contacts);
		localStorage.setItem('list', JSON.stringify(this.contacts));
	};

	loadStorage() {
		const storageData = localStorage.getItem('list');
		if (storageData) {
			this.contacts = this.sortAlphabetically(JSON.parse(storageData));
		};
	};

	searchList(query) {
		this.contacts.forEach(el => {
			if (el.name.toLowerCase().includes(query.toLowerCase())) {
				this.searchedResults.push(el);
			};
		});
	};

	sortAlphabetically = (list) => {
		// create array of names from contacts list and sort alphabetically
		let listNames = [];
		list.forEach(el => {
			listNames.push(el.name);
		});

		listNames.sort();
		listNames.reverse();

		let arraySorted = [];
		listNames.forEach(el => {
			const entry = list.find(el2 => el2.name == el);
			arraySorted.push(entry);
		})
		return arraySorted
	};
};