export const setItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItem = key => {
  return JSON.parse(localStorage.getItem(key));
};

class Storage {
  constructor(keyName, defaultValue) {
    this.keyName = keyName;

    if (!this.exist() && defaultValue) {
      this.save(defaultValue);
    }
  }

  save(data) {
    setItem(this.keyName, data);
  }

  load() {
    return getItem(this.keyName);
  }

  exist() {
    return getItem(this.keyName) ? true : false;
  }

  existById(id) {
    return getItem(this.keyName).find(v => v.id === id) ? true : false;
  }

  push(item) {
    const loadedData = this.load() ?? [];

    if (!Array.isArray(loadedData)) {
      console.error('You can push only on Array');
      return;
    }

    if (!this.existById(item.id)) {
      loadedData.push(item);
      this.save(loadedData);

      return;
    }

    this.save(loadedData.map(v => (v.id === item.id ? item : v)));
  }

  findAllByUsername(page, limit, username = null) {
    let loadedData;

    console.log(username);

    if (username) {
      loadedData = getItem(this.keyName).filter(el =>
        el.userName.toLowerCase().includes(username.toLowerCase()),
      );
    } else {
      loadedData = getItem(this.keyName);
    }

    const len = loadedData.length;
    const maxPage =
      loadedData.length % limit
        ? parseInt(len / limit + 1)
        : parseInt(len / limit);

    const next = page < maxPage - 1;
    const prev = page > 0;

    const pageable = {
      maxPage,
      next,
      prev,
      content: loadedData.slice(page * limit, page * limit + limit),
    };
    console.log(pageable);

    return pageable;
  }
}

export default Storage;
