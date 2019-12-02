export default class Contact {
	constructor(name, number, email) {
		this.name = name,
		this.number = number,
		this.email = email,
		this.id = this.generateID()
	};

	generateID() {
		let length = 8,
	    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	    retID = "";
	    for (var i = 0, n = charset.length; i < length; ++i) {
	        retID += charset.charAt(Math.floor(Math.random() * n));
	    };
	    return retID;
	};
};