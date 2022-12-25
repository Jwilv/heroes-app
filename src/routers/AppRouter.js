import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />
                <PrivateRouter  path='*' element={<DashboardRouter />} /> 
            </Routes>
        </>
    )
}