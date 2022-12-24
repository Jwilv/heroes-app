import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { heroes } from '../components/data/heroes'
import { HeroesCard } from '../components/heroes/HeroesCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const [{ searchText }, handleInputChanGet] = useForm({ searchText: '' })

    const location = useLocation();
    console.log(location)

    // const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${ searchText }`)

        // if (searchText.trim().length <= 1) return;

        //setSearch(searchText);
    }

    return (
        <div>
            <h2>Search Screen</h2>
            <hr />
            <div className='row'>

                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type={'text'}
                            autoComplete='off'
                            placeholder={'busca a tu heroe'}
                            className={'form-control'}
                            name={'searchText'}
                            value={searchText}
                            onChange={handleInputChanGet}
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
