import React from 'react';
import GoogleLogin from 'react-google-login';
import { setToken } from '../../../../config/Utils';
import { getGoogleAccessToken } from '../Auth.service';
import './GoogleLoginPage.scss';

const GoogleLoginPage = () => {

    const responseGoogle = (token) => {
        let tokenId = token && token.tokenId ? token.tokenId : null;

        getGoogleAccessToken(tokenId)
            .then(response => {
                let accessToken = response.accessToken
                let refreshToken = response.refreshToken
                let googleIdToken = tokenId;
                console.log(tokenId);
                console.log(response);
                setToken(accessToken, refreshToken, googleIdToken);
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