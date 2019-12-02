import { elements } from './base.js';

export const clearFields = () => {
	elements.nameField.value = '';
	elements.numField.value = '';
	elements.emailField.value = '';
};

export const toggleSaveView = () => {
	elements.editView.style.display = 'none';
	elements.saveView.style.display = 'block';
	elements.contactView.style.display = 'none';
	elements.listView.style.display = 'none';
};

export const saveContactInfo = () => {

	const contactInfo = {
		name: '',
		number: '',
		email: ''
	};

	// make only first letter of name uppercase
	function capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}
	// get input from input fields
	const name = capitalizeFirstLetter(elements.nameField.value);
	const number = elements.numField.value;
	const email = elements.emailField.value;
	contactInfo.name = name;
	contactInfo.number = number;
	contactInfo.email = email;
	return contactInfo;
};
