import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const PrivateRouter = ({ children }) => {

    const location = useLocation();
    localStorage.setItem('lastPath', location.pathname)

    const { user } = useContext(AuthContext)
    return (user.logged)
        ? children
        : <Navigate to={'/login'} />
}

PrivateRouter.propTypes = {
    children: PropTypes.element.isRequired,
}