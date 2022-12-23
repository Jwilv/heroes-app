import React from 'react'
import { useParams } from 'react-router'

export const HeroesScreen = () => {
    const {heroId} = useParams();
    return (
        <div>
            <h1>HeroesScreen</h1>
            <h1>{heroId}</h1>

        </div>
    )
}
