import React from 'react';

const Footer = (props) => {
    return (
        <footer className="page-footer indigo darken-4">
            <div className="container center">
                <h5>Copyright © Bit Student {new Date().getFullYear()}</h5>
            </div>
        </footer>
    );
}

export default Footer;