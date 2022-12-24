import React from 'react'
import { heroes } from '../components/data/heroes'
import { HeroesCard } from '../components/heroes/HeroesCard';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    return (
        <div>
            <h2>Search Screen</h2>
            <hr />
            <div className='row'>

                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form>
                        <input
                            type={'text'}
                            placeholder={'busca a tu heroe'}
                            className={'form-control'}
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Buscar
                        </button>

                    </form>

                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    {
                        heroesFiltered.map(hero => (
                            <HeroesCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}
