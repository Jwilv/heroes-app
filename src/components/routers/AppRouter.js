import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { MarverlScreen } from '../marvel/MarverlScreen'
import { Navbar } from '../ui/NavBar'



export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />
                <Route exact path='/' element={<MarverlScreen />} />
                {/* <Route path='*' element={<h1>404 alla la ponen en 4</h1>} /> */}

            </Routes>
        </>
    )
}