import React from 'react';
import Proptypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoginModal from '../../modules/Auth/LoginModal/LoginModal';
import FeedbackForm from '../../modules/Feedback/FeedbackForm/FeedbackForm';

import './AppContainer.scss';


const AppContainer = (props) => {
    return (
        <div className={`app-container-wrapper ${props.className}`}>
            <Navbar />
            {props.children}
            {!props.hideFooter && <Footer />}
            <LoginModal />
            <FeedbackForm />
        </div>
    );
};

AppContainer.defaultProps = {
    className: '',
    hideFooter: false,
};

AppContainer.propTypes = {
    className: Proptypes.string,
    children: Proptypes.node.isRequired,
    hideFooter: Proptypes.bool
};

export default AppContainer;