import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { setToken } from '../../../../config/Utils';
import { getGoogleAccessToken } from '../Auth.service';
import { setAccessToken, setGoogleToken, setRefreshToken } from '../Auth.actions';

import './GoogleLoginPage.scss';


const GoogleLoginPage = () => {

    const dispatch = useDispatch();

    const responseGoogle = (token) => {
        let tokenId = token && token.tokenId ? token.tokenId : null;

        getGoogleAccessToken(tokenId)
            .then(response => {
                let accessToken = response.accessToken
                let refreshToken = response.refreshToken
                let googleIdToken = tokenId;
                setToken(accessToken, refreshToken, googleIdToken);
                dispatch(setGoogleToken(googleIdToken));
                dispatch(setAccessToken(accessToken));
                dispatch(setRefreshToken(refreshToken));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="google-login-page-wrapper">
            <h1>Login Page</h1>
            <GoogleLogin
                clientId="238080994627-h3gm4bjd7b617peas272a3t72eaomsbi.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );

};

export default GoogleLoginPage;