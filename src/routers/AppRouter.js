import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'



export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/login' element={
                <PublicRouter>
                    <LoginScreen />
                </PublicRouter>
            }
            />

            <Route path='*' element={
                <PrivateRouter>
                    <DashboardRouter />
                </PrivateRouter>
            }
            />
        </Routes>
    )
}