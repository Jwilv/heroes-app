import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className='card-columns'>
      {
        heroes.map(hero => (
          <HeroesCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
