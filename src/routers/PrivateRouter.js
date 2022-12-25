import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Route } from 'react-router-dom'

export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : <Navigate to={'/login'} />
        )}
        />
    )
}

PrivateRouter.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}