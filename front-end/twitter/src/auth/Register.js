import React from 'react';

function Register(props) {
    return (
        <div className='register'>
            <span>Register</span>
            <input type="text" className="form-control" placeholder="name" />
            <input type="text" className="form-control" placeholder="Email" />
            <input type="text" className="form-control" placeholder="Password" />
            <button type="button" className="btn btn-primary">Register</button>
        </div>
    );
}

export default Register;