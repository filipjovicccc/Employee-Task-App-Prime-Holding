export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => JSON.parse(localStorage.getItem(key));


export const addToStorage = (key, item) => {
  const storage = getStorage(key);
  const updateStorage = [...storage, item];
  setStorage(key, updateStorage);
  return updateStorage;
};

export const updateStorage = (id, updatingItem, key) => {
  const storage = getStorage(key);
  const newItem = storage.map((item) => {
    if (item.id === id) {
      return { ...item, ...updatingItem };
    }
    return item;
  });

  setStorage(key, newItem);
  return newItem;
};


export const deleteStorage = (id, key) => {
  const storage = getStorage(key);
  const updateStorage = storage.filter((item) => item.id !== id);
  setStorage(key, updateStorage);
  return updateStorage;
};
