import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { MarverlScreen } from '../components/marvel/MarverlScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'


export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Routes>
                    <Route path='/' element={<MarverlScreen />} />
                    <Route path='/marvel' element={<MarverlScreen />} />
                    <Route path='/hero/:heroId' element={<HeroesScreen />} />
                    <Route path='/dc' element={<DcScreen />} />
                    <Route path='/search' element={<SearchScreen />} />
                    <Route path='*' element={<h1>404 no page</h1>} />
                </Routes>
            </div>
        </>
    )
}
