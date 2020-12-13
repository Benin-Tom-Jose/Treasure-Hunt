import React from 'react';

import './MaintenancePage.scss';


const MaintenancePage = () => {
    return (
        <div className="maintenance-page-wrapper">
            <div className="error-image">
                <h1><span role="img" aria-label="">👨‍🔧</span></h1>
                <div className="icons">
                    <span className="icon icon-gear icon-spin right slow one"></span>
                    <span className="icon icon-gear icon-spin left two"></span>
                    <span className="icon icon-gear icon-spin left three"></span>
                </div>
            </div>
            <div className="error-msg-container">
                <h1>We're working on this account now!</h1>
                <p>We expect this outage to last about 15 minutes. If you continue to see this page, please contact us via email at support@incognito.com.</p>
                <p>We apologize for any inconvenience.</p>
            </div>
        </div>
    );
};

export default MaintenancePage;