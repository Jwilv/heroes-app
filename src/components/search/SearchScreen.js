import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router';
import { HeroesCard } from '../heroes/HeroesCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = () => {



    const location = useLocation();

    const { q = '' } = useMemo(() => queryString.parse(location.search), [location.search])


    const [{ searchText }, handleInputChanGet] = useForm({ searchText: q })

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])



    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`)

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
                        (q === '')
                        &&
                        <div className='alert alert-info'>
                            Busca algun heroe.
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger'>
                            No se a encontrado el heroe.
                        </div>
                    }
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
