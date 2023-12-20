import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/specials'>Specials</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Header;