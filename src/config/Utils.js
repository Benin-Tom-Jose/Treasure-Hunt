import { BASE_URL } from "./ApiUrl";

export const getBaseURL = () => {
    let url = BASE_URL;
    return url;
};

export const setAuthToken = (authToken) => {
    authToken && localStorage.setItem("__AUTH_TOKEN", authToken);
}

export const getAuthToken = () => {
    return localStorage.getItem("__AUTH_TOKEN");
}

export const setRefreshToken = (refreshToken) => {
    refreshToken && localStorage.setItem("__REFRESH_TOKEN", refreshToken);
}

export const getRefreshToken = () => {
    return localStorage.getItem("__REFRESH_TOKEN");
}

export const setGoogleIdToken = (idToken) => {
    idToken && localStorage.setItem("__GOOGLE_ID_TOKEN", idToken);
}

export const getGoolgeIdToken = () => {
    return localStorage.getItem("__GOOGLE_ID_TOKEN");
}

export const setToken = (authToken, refreshToken, googleIdToken) => {
    setAuthToken(authToken);
    setRefreshToken(refreshToken);
    setGoogleIdToken(googleIdToken);
}

export const clearTokens = () => {
    setAuthToken("");
    setRefreshToken("");
    setGoogleIdToken("");
}