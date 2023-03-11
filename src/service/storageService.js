export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => JSON.parse(localStorage.getItem(key));

//create storage
export const addToStorage = (key, item) => {
  const storage = getStorage(key);
  const updateStorage = [...storage, item];
  setStorage(key, updateStorage);
  return updateStorage;
};

//update storage
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

//read storage
//delete storage
export const deleteStorage = (id, key) => {
  const storage = getStorage(key);
  const updateStorage = storage.filter((item) => item.id !== id);
  setStorage(key, updateStorage);
  return updateStorage;
};
