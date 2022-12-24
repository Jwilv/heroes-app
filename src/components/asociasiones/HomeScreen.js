import React from 'react'
import { heroes } from '../data/heroes'

export const HomeScreen = () => {

    return (
        <div>
            <h1>Heroes</h1>
            {heroes.map( ({id,publisher}) => 
            <HeroesList 
            key={id}
            publisher={publisher} 
            />)}
        </div>
    )
}
