import { elements } from './base.js';

export const renderListEntry = (name, id) => {
	const markup = `
		<div class="name-entry" data-id="${id}">
			<p>${name}</p>
		</div>
	`;
	elements.listContainer.insertAdjacentHTML('afterbegin', markup);
}

export const clearListField = () => {
	const entries = document.querySelectorAll('.name-entry');
	entries.forEach(e => {
		e.parentElement.removeChild(e)
	})
};

export const renderListAll = (listOfContacts) => {
	for (var i = 0 ; i < listOfContacts.length ; i++) {
		renderListEntry(listOfContacts[i].name, listOfContacts[i].id);
	};
};

export const toggleListView = () => {
	elements.editView.style.display = 'none';
	elements.saveView.style.display = 'none';
	elements.contactView.style.display = 'none';
	elements.listView.style.display = 'block';
};

export const displaySearchResults = () => {

};

export const toggleSearchBar = () => {

	if (elements.backBtn.style.display == 'none') {
		elements.backBtn.style.display = 'block';
	} else {
		elements.backBtn.style.display = 'none';
	}

	if (elements.searchContainer.style.display == 'flex') {
		elements.searchContainer.style.display = 'none'
	} else {
		elements.searchContainer.style.display = 'flex'
	}
}

export const clearSearchField = () => {
	elements.searchField.value = '';
}

export const clearSearchResults = (list) => {
	const deleted = list.splice(0);
}

export const toggleDisplayAddBtn = () => {
	elements.addBtn.style.display == 'block' ? elements.addBtn.style.display = 'none' : elements.addBtn.style.display = 'block';
}