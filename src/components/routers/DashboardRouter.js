import React from 'react'
import { Navbar } from '../ui/NavBar'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { MarverlScreen } from '../marvel/MarverlScreen'
import { HeroesScreen } from '../heroes/HeroesScreen'
import { DcScreen } from '../dc/DcScreen'


export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Routes>
                    <Route path='/' element={<HeroesScreen />} />
                    <Route path='/marvel' element={<MarverlScreen />} />
                    <Route path='/heroe/:heroeId' element={<HeroesScreen />} />
                    <Route path='/dc' element={<DcScreen />} />
                    <Route path='*' element={<h1>404 no page</h1>} />
                </Routes>
            </div>
        </>
    )
}
