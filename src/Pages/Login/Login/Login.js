import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {redirect,signInWithGoogle} = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';
    const history = useHistory();
    

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={()=>redirect(history,signInWithGoogle,redirect_url)} className="btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;