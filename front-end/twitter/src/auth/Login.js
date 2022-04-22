import React, { useContext, useState } from 'react';
import AppContext from '../components/AppContext';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    const {dispatch} = useContext(AppContext);
    const [userInput, setUserInput] = useState({email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    
    const onChangeLogin = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    // login
    const onSubmitLogin = async (e) => {
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:7000/api/v1/auth/login', userInput);
            const {token, userName} = response.data.data;
            localStorage.setItem('token', token);
            dispatch({type: 'CURRENT_USER', payload: {userName}});
            history.push('/');
        }catch(error){
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <form className='login' onSubmit={onSubmitLogin}>
            <span>Login</span>
            {
                errorMessage && <span className='error-message'>{errorMessage}</span>
            }

            <input type="text" className="form-control" placeholder="Email" 
                value={userInput.email}
                onChange={(e) => onChangeLogin(e)}
            />
            <input type="text" className="form-control" placeholder="Password" 
                value={userInput.password}
                onChange={(e) => onChangeLogin(e)}
            />
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default Login;