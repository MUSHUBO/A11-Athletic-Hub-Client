import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            LogIn Please
            <br />
            <Link className='text-blue-700' to="/auth/register">register</Link>
        </div>
    );
};

export default Login;