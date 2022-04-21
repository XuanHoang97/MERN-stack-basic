import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <NavLink to="/" className='logoTwitter'>Twitter</NavLink>
            <div className='leftMenu'>
                <NavLink to="/login" activeClassName="active" exact>Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    );
}
export default Header;