import { elements } from './base.js';

export const toggleContactView = () => {
	elements.editView.style.display = 'none';
	elements.saveView.style.display = 'none';
	elements.contactView.style.display = 'block';
	elements.listView.style.display = 'none';
};

// diplay contact info in contact view
export const displayContactInfo = (contact) => {

	// display name
	const markupName = `<div class="details-name">${contact.name}</div>`;
	elements.profileContainer.insertAdjacentHTML('afterbegin', markupName);

	// display contact info
	if (contact.email) {
	const markupContactInfo = `
		<div class="details-field">
			<p class="details-class">Email</p>
			<p class="details-data">${contact.email}</p>
		</div>
		`;
		elements.contactDetails.insertAdjacentHTML('afterbegin', markupContactInfo);
	};
	if (contact.number) {
		const markupContactInfo = `
			<div class="details-field">
				<p class="details-class">Mobile</p>
				<p class="details-data">${contact.number}</p>
			</div>
		`;
		elements.contactDetails.insertAdjacentHTML('afterbegin', markupContactInfo);
	};
};

export const clearFields = () => {

	const elem = elements.contactDetails
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	};

	if (document.querySelector('.details-name')) {
		const element = document.querySelector('.details-name');
		element.parentElement.removeChild(element);
	};
};