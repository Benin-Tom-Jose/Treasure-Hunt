import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.scss';


const PageNotFound = () => {

    return (
        <div className="page-not-found-wrapper">
            <h1>Page Not Found!!!</h1>
            <Link to="/">Return Home</Link>
        </div>
    );

};

export default PageNotFound;