import React, {useState, useContext} from 'react';
import AppContext from '../components/AppContext';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Register(props) {
    const {dispatch} = useContext(AppContext);
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const onChangeRegister = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    // register
    const onSubmitRegister = async (e) => {
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:7000/api/v1/auth/register', userInput);
            const {token, userName} = response.data.data;
            localStorage.setItem('token', token);
            dispatch({type: 'CURRENT_USER', payload: {userName}});
            history.push('/');
        }catch(error){
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <form className='register' onSubmit={onSubmitRegister}>
            <span>Register</span>

            {
                errorMessage && 
                (Array.isArray(errorMessage) ? (
                    errorMessage.map((error, index) => (
                        <span className='error-message' key={index}>{error}</span>
                    ))
                )
                : (
                    <span className='error-message'>{errorMessage}</span>
                ))
            }

            <input type="text" className="form-control" placeholder="name" 
                value={userInput.name}
                onChange={onChangeRegister}
            />
            <input type="text" className="form-control" placeholder="Email" 
                value={userInput.email}
                onChange={onChangeRegister}
            />
            <input type="text" className="form-control" placeholder="Password" 
                value={userInput.password}
                onChange={onChangeRegister}
            />
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
}

export default Register;