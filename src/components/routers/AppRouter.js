import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />
                 <Route  path='*' element={<DashboardRouter />} /> 
                {/* <Route path='*' element={<h1>404 alla la ponen en 4</h1>} /> */}


            </Routes>
        </>
    )
}