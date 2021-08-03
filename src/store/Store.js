class Store {
	constructor(parmas) {
		this.state = parmas.state;
	}

	set(key,data) {
		this.state[key] = data;
	}

	get(key) {
		return this.state?.[key];
	}
}

export default Store;