import React, { useState } from 'react';
import { AppBar, Hidden, Icon, IconButton, SwipeableDrawer, useScrollTrigger } from '@material-ui/core';

import { getAsset } from '../../../config/Utils';

import './Navbar.scss';

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
    });

    const handleDrawerState = (isOpen) => {
        setIsDrawerOpen(isOpen)
    };

    return (
        <>
            <AppBar color="transparent" className="navbar-wrapper">
                <nav className={`navbar-container ${trigger ? 'navbar-mini' : ''}`}>
                    <div className="brand-container">
                        <img src={getAsset("logo-light-1.png", "img")} alt="Treasure Hunt" className="brand-logo" />
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
                            <li className="nav-item" onClick={() => handleDrawerState(true)}>Contest</li>
                            <li className="nav-item">Rules</li>
                            <li className="nav-item">Contact</li>
                            <li className="nav-item">Login</li>
                        </ol>
                    </Hidden>
                </nav>
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
                        <li className="nav-item">Login</li>
                    </ol>
                </div>
            </SwipeableDrawer>
        </>
    );
};

export default Navbar;