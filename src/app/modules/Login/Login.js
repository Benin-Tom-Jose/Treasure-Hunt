import React from 'react';
import GoogleLogin from 'react-google-login';
import './Login.scss';

const Login = () => {
    const responseGoogle = (token)=>{
        console.log(token.tokenId);
    };

    return (
        <div className="login-page-wrapper">
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

export default Login;