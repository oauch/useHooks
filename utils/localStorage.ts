export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") localStorage.getItem(key);
};
export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") localStorage.setItem(key, value);
};
export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") localStorage.removeItem(key);
};
export const clearLocalStorage = () => {
  if (typeof window !== "undefined") localStorage.clear();
};
