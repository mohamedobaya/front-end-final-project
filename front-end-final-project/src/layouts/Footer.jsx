import { faTools } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = ()=>(
    <div className="footer w-100 bg-dark py-3 mt-5">
        <div className="container d-flex justify-content-center">
            <h2 className="end">
                <FontAwesomeIcon icon={faTools} /> made by Team-A
            </h2>
        </div>
    </div>
);
export default Footer;