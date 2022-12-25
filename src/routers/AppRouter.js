import React, { useContext } from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'



export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <>
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />
                <Route path='*' element={
                    <PrivateRouter user={user} >
                        <DashboardRouter />
                    </PrivateRouter>
                }
                />
            </Routes>
        </>
    )
}