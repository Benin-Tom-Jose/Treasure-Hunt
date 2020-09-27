export const BASE_URL = "https://jsonplaceholder.typicode.com/";

const ENDPOINTS = {
    getPost: "todos/1"
};

const replaceParams = (url, params) => {
    const regex = /\{:[A-Za-z0-9-_]+\}/g;
    let index = 0;
    const path = url.replace(regex, () => params[index++]);
    return path;
};

const ApiUrl = {
    getUrl: (key, params = []) => {
        const endpoint = ENDPOINTS[key];
        const path = replaceParams(endpoint, params);
        return path;
    }
};

export default ApiUrl;