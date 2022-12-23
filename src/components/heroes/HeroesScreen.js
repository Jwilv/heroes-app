import React from 'react'
import { Navigate, useParams } from 'react-router'
import { getHeroesById } from '../selectors/getHeroeById';

export const HeroesScreen = () => {
    const {heroId} = useParams();
    const hero = getHeroesById(heroId);
    if(!hero) return <Navigate to={'/marvel'}/>
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero
    return (
        <div>
            <h1>HeroesScreen</h1>

        </div>
    )
}
