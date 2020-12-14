import React from 'react';
import { Icon } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="footer-wrapper">
            <span className="copyright-container">Copyright © 2020, All Rights Reserved.</span>
            {
                location && location.pathname !== "/" &&
                <div className="highlight-container">
                    <span className="label">Made with <Icon className="icon">favorite</Icon></span>
                    <span className="creators">@Litmus7</span>
                </div>
            }
        </footer>
    );
};

export default Footer;