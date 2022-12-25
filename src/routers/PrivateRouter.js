import React from 'react'
import PropTypes from 'prop-types'
import { Navigate  } from 'react-router-dom'

export const PrivateRouter = ({ user,children}) => {
    return (user.logged)
    ?  children
    : <Navigate to={'/login'}/>
}

PrivateRouter.propTypes ={
    children: PropTypes.element.isRequired,
    user: PropTypes.object.isRequired,
}