import React from 'react'

export const HeroesCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className='card ms-3 m-2' style={{ maxWidth: 540 }}>
            <div className='row no-gutters'>
                <div className='col-md-4 p-0'>
                    <img src={`./assets/heroes/${id}.jpg`} className='card-img' alt={superhero} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title mt-2'>{superhero}</h5>
                        <div className='card-text'>
                            <p>{alter_ego}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
