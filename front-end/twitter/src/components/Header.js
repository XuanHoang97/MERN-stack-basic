import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import AppContext from './AppContext';

function Header(props) {
    const {state, dispatch} = useContext(AppContext);
    const {user} = state;

    // sign out
    const signOut = () => {
        localStorage.removeItem('token');
        // reset user to null
        dispatch({type: 'CURRENT_USER', payload: null});
    }


    return (
        <div className='header'>
            <NavLink to="/" className='logoTwitter'>Twitter</NavLink>
            {
                user ? (
                    <div className='user-info'>
                        <span>{user.userName}</span>
                        <button onClick={()=>signOut() }>Sign out</button>
                    </div>
                ) : (
                <div className='leftMenu'>
                    <NavLink to="/login" activeClassName="active" exact>Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
                )
            }
            
        </div>
    );
}
export default Header;