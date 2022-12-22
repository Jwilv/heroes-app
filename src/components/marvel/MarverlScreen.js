import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarverlScreen = () => {
    const publisher = 'Marvel Comics';
    return (
        <div>
            <h1>Marverl Screen</h1>
            <HeroesList publisher={publisher}/>
        </div>
    )
}
