/**
 * 存储localStorage
 */
export const setStore = (name: string, content: string) => {
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
    return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
    window.localStorage.removeItem(name);
};