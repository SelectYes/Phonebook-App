import { elements } from './base.js';


export const importContactDetails  = (selectedContact) => {
	elements.editNameField.value = selectedContact.name;
	elements.editNumField.value = selectedContact.number;
	elements.editEmailField.value = selectedContact.email;
};

export const toggleEditView = () => {
	elements.editView.style.display = 'block';
	elements.saveView.style.display = 'none';
	elements.contactView.style.display = 'none';
	elements.listView.style.display = 'none';
};

export const saveEdit = (contactID, contactList) => {

	// find index of contact in list
	const index = contactList.contacts.findIndex(el => el.id == contactID);

	// save new data to list entry
	contactList.contacts[index].name = elements.editNameField.value;
	contactList.contacts[index].number = elements.editNumField.value;
	contactList.contacts[index].email = elements.editEmailField.value;
};	
