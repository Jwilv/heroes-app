import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getHeroesById } from '../selectors/getHeroeById';

export const HeroesScreen = () => {
    const { heroId } = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroesById(heroId), [heroId])

    if (!hero) return <Navigate to={'/marvel'} />

    const PREVIOUS_PAGE = -1;

    const handleRegresar = () => {
        navigate( PREVIOUS_PAGE );
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-8'>
                <h2>{superhero}</h2>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b> Alter ego: </b>{alter_ego} </li>
                    <li className='list-group-item'> <b> Publisher: </b>{publisher} </li>
                    <li className='list-group-item'> <b> First appearance: </b>{first_appearance} </li>
                </ul>
                <div className='m-2'>
                    <h5 className='m-1'>Characters</h5>
                    <p className='m-1'>{characters}</p>
                </div>

                <button
                    className='btn btn-outline-info'
                    onClick={handleRegresar}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
