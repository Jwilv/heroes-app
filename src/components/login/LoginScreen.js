import React from 'react'
import { Navigate, redirect, Route, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/',{replace: true})
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
