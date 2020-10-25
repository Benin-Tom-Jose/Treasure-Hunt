import moment from 'moment';
import { BASE_URL } from "./ApiUrl";

export const getBaseURL = () => {
    let url = BASE_URL;
    return url;
};

export const setAccessToken = (accessToken) => {
    localStorage.setItem("__ACCESS_TOKEN", accessToken);
};

export const getAccessToken = () => {
    return localStorage.getItem("__ACCESS_TOKEN");
};

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem("__REFRESH_TOKEN", refreshToken);
};

export const getRefreshToken = () => {
    return localStorage.getItem("__REFRESH_TOKEN");
};

export const setGoogleIdToken = (idToken) => {
    localStorage.setItem("__GOOGLE_ID_TOKEN", idToken);
};

export const getGoolgeIdToken = () => {
    return localStorage.getItem("__GOOGLE_ID_TOKEN");
};

export const setToken = (accessToken, refreshToken, googleIdToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setGoogleIdToken(googleIdToken);
};

export const clearTokens = () => {
    setAccessToken("");
    setRefreshToken("");
    setGoogleIdToken("");
};

export const getAsset = (fileName, path = "") => {
    let asset;
    try {
        asset = require(`../assets/${path ? `${path}/` : ""}${fileName}`);
    }
    catch {
        asset = "";
    }
    return asset;
};

export const formatDate = (date, format) => {
    let formattedDate;
    try {
        formattedDate = moment(date).format(format);
    }
    catch {
        formattedDate = "";
    }
    return formattedDate;
};

export const isUserAuthenticated = () => {
    let isAuthenticated = getAccessToken() ? true : false;
    return isAuthenticated;
};