import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />
                <Route  path='*' element={<DashboardRouter />} /> 
            </Routes>
        </>
    )
}