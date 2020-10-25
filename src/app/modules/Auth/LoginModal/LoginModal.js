import React from 'react';
import Proptypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, Icon, IconButton } from '@material-ui/core';

import { clearNextUrl } from '../../../App.actions';
import { setToken } from '../../../../config/Utils';
import { getGoogleAccessToken } from '../Auth.service';
import { setAccessToken, setGoogleToken, setIsLoginModalOpen, setRefreshToken } from '../Auth.actions';

import './LoginModal.scss';


const LoginModal = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const nextUrl = useSelector(state => state.AppReducer.nextUrl);
    const isModalOpen = useSelector(state => state.AuthReducer.isLoginModalOpen);

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
                if (nextUrl) {
                    history.push(nextUrl);
                }
                handleModalClose();
                history.push(history.location.pathname);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleModalClose = () => {
        dispatch(clearNextUrl());
        dispatch(setIsLoginModalOpen(false));
    };

    return (
        <Dialog
            open={isModalOpen}
            onClose={handleModalClose}
            fullWidth
            maxWidth="sm"
            className="login-modal-wrapper"
        >
            <div className="login-modal-container">
                <IconButton
                    className="btn-close"
                    aria-label="close"
                    onClick={handleModalClose}
                >
                    <Icon>close</Icon>
                </IconButton>
                <DialogContent className="modal-content-container">
                    <GoogleLogin
                        clientId="238080994627-h3gm4bjd7b617peas272a3t72eaomsbi.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </DialogContent>
            </div>
        </Dialog>
    );
};

LoginModal.defaultProps = {
    isOpen: false,
    handleClose: () => { }
};

LoginModal.propTypes = {
    isOpen: Proptypes.bool,
    handleClose: Proptypes.func,
};

export default LoginModal;