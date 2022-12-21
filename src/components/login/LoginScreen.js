import React from 'react'
import { Navigate, redirect, Route } from 'react-router'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    const handleLogin = () => {
        
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
                {false ? <Link to={'/'}>pasa</Link> : <Link>no podes pasar</Link>}
            </button>
        </div>
    )
}
