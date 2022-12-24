import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../type/types';


export const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    const handleLogin = () => {
        navigate('/',{replace: true})
        dispatch({
            type: types.login,
            payload: { name: 'juan' },
        })
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
