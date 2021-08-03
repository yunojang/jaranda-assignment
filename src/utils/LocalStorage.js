export const setItem = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
}

export const getItem = (key) => {
	return JSON.parse(localStorage.getItem(key));
}

class Storage {
	constructor(keyName) {
		this.keyName = keyName;
	}

	save(data) {
		setItem(this.keyName, data);
	}

	load() {
		return getItem(this.keyName);
	}

	push(item) {
		const loadedData = this.load() ?? [];

		if (!Array.isArray(loadedData)) {
			console.error('You can push only on Array');
			return;
		}

		loadedData.push(item);
		this.save(loadedData);
	}
}

export default Storage;