export const setLocalStorageItem = (key, value) => {
  const localStorage = window.localStorage
  localStorage.setItem(key, value)
}

export const getLocalStorageItem = (key) => {
  const localStorage = window.localStorage
  return localStorage.getItem(key)
}

export const removeLocalStorageItem = (key) => {
  const localStorage = window.localStorage
  localStorage.removeItem(key);
}

export const clearLocalStorage = () => {
  localStorage.clear()
}