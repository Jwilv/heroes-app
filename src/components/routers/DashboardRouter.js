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
            <Routes>
                <Route  path='/marvel' element={<MarverlScreen />} />
                <Route  path='/heroe/:heroeId' element={<HeroesScreen />} />
                <Route  path='/dc' element={<DcScreen />} />
                <Route path='*' element={<DcScreen />}/>
            </Routes>
        </>
    )
}
