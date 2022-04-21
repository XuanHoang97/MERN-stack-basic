import React from 'react';

function Login(props) {
    return (
        <div className='login'>
            <span>Login</span>
            <input type="text" className="form-control" placeholder="Email" />
            <input type="text" className="form-control" placeholder="Password" />
            <button type="button" className="btn btn-primary">Login</button>
        </div>
    );
}

export default Login;