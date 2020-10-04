import { BASE_URL } from "./ApiUrl";

export const getBaseURL = () => {
    let url = BASE_URL;
    return url;
};

export const setAccessToken = (accessToken) => {
    accessToken && localStorage.setItem("__ACCESS_TOKEN", accessToken);
}

export const getAccessToken = () => {
    return localStorage.getItem("__ACCESS_TOKEN");
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

export const setToken = (accessToken, refreshToken, googleIdToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setGoogleIdToken(googleIdToken);
}

export const clearTokens = () => {
    setAccessToken("");
    setRefreshToken("");
    setGoogleIdToken("");
}