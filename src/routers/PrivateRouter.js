import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const PrivateRouter = ({ children }) => {

    const { user } = useContext(AuthContext)
    return (user.logged)
        ? children
        : <Navigate to={'/login'} />
}

PrivateRouter.propTypes = {
    children: PropTypes.element.isRequired,
}