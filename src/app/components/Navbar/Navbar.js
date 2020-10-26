import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppBar, Hidden, Icon, IconButton, LinearProgress, SwipeableDrawer, useScrollTrigger } from '@material-ui/core';

import { setIsLoginModalOpen } from '../../modules/Auth/Auth.actions';
import { clearTokens, getAsset, isUserAuthenticated } from '../../../config/Utils';

import './Navbar.scss';

const Navbar = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const api = useSelector(state => state.AppReducer.apiStack);

    useEffect(() => {
        if (isUserAuthenticated()) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    });

    const trigger = useScrollTrigger({
        disableHysteresis: true,
    });

    const handleDrawerState = (isOpen) => {
        setIsDrawerOpen(isOpen)
    };

    const handleLogoClick = () => {
        history.push("/");
    };

    const handleAuth = () => {
        if (isUserAuthenticated()) {
            history.push('/');
            clearTokens();
        }
        else {
            dispatch(setIsLoginModalOpen(true));
        }
    };

    return (
        <>
            <AppBar color="transparent" className="navbar-wrapper">
                <nav className={`navbar-container ${trigger ? 'navbar-mini' : ''}`}>
                    <div className="brand-container">
                        <img
                            src={getAsset("logo-light-1.png", "img")}
                            alt="Treasure Hunt"
                            className="brand-logo"
                            onClick={handleLogoClick}
                        />
                    </div>
                    <Hidden mdUp>
                        <IconButton
                            aria-label="menu"
                            onClick={() => handleDrawerState(true)}
                            className="btn-menu"
                        >
                            {
                                !isDrawerOpen &&
                                <Icon>menu</Icon>
                            }
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <ol className="navlist-container">
                            <li className="nav-item">Contest</li>
                            <li className="nav-item">Rules</li>
                            <li className="nav-item">Contact</li>
                            <li className="nav-item" onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</li>
                        </ol>
                    </Hidden>
                </nav>
                {api.length > 0 && <LinearProgress />}
            </AppBar>
            <SwipeableDrawer
                anchor="right"
                open={isDrawerOpen}
                onOpen={() => handleDrawerState(true)}
                onClose={() => handleDrawerState(false)}
                disableDiscovery={iOS}
                disableBackdropTransition={!iOS}
                className="sidepane-wrapper"
            >
                <div className="sidepane-container">
                    <header className="sidepane-header-container">
                        <IconButton
                            aria-label="close"
                            onClick={() => handleDrawerState(false)}
                        >
                            <Icon>close</Icon>
                        </IconButton>
                    </header>
                    <ol className="navlist-container">
                        <li className="nav-item">Contest</li>
                        <li className="nav-item">Rules</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item" onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</li>
                    </ol>
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default Navbar;