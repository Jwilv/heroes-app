import React from 'react'
import PropTypes from 'prop-types'
import { Route, useNavigation } from 'react-router-dom'

export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const navigation = useNavigation();
    return (
        <Route
            {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : <navigation to='/login'/>
        )}
        />
    )
}

PrivateRouter.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}