import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className='indigo darken-4'>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to='/'>
                    BitShow
                </Link>
            </div>
        </nav>
    );
}

export default Header;