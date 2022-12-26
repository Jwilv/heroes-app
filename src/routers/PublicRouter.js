import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const PublicRouter = ({ children }) => {

    const { user } = useContext(AuthContext)
    return (!user.logged)
        ? children
        : <Navigate to={'/marvel'} />
}

PrivateRouter.propTypes = {
    children: PropTypes.element.isRequired,
}