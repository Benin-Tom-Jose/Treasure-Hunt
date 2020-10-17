import React from 'react';
import Proptypes from 'prop-types';

import Navbar from '../Navbar/Navbar';

import './AppContainer.scss';


const AppContainer = (props) => {
    return (
        <div className={`app-container-wrapper ${props.className}`}>
            <Navbar />
            {props.children}
        </div>
    );
};

AppContainer.defaultProps = {
    className: '',
};

AppContainer.propTypes = {
    className: Proptypes.string,
    children: Proptypes.node.isRequired
};

export default AppContainer;