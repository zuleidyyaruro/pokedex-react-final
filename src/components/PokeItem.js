import React from 'react'
import { Link } from 'react-router-dom';
import bg_red from '../assets/img/bg_red.jpg';

const PokeItem = ({ dataPoke }) => {

    const data = {
        'id': dataPoke.id,
        'name': dataPoke.name,
        'image': dataPoke.sprites.other.dream_world.front_default,
        'type': dataPoke.types[0].type.name,
        'hp': dataPoke.stats[0].base_stat,
        'attack': dataPoke.stats[1].base_stat,
        'defense': dataPoke.stats[2].base_stat,
        'speed': dataPoke.stats[5].base_stat,
    }

    return (
        <>
            {
                data.image && (

                    <div className='card-container overflow-hidden border rounded'>
                        <Link to={`/pokedex/${data.id}`}>
                            <div className="bubbles" >
                                <img src={bg_red} alt="" />
                            </div>
                            <div className="image">
                                <img src={data.image} alt="pokemon" />
                            </div>
                            <div className="personal-data-container">
                                <span className='name fw-bold text-capitalize'>{data.name}</span>
                                <p className='type text-capitalize'>{data.type}</p>
                            </div>
                            <div className="stats-container p-2">
                                <div className="text-center">
                                    <div className="hp">{data.hp}</div>
                                    <div className="fw-bold">HP</div>
                                </div>
                                <div className="text-center">
                                    <div className="attack">{data.attack}</div>
                                    <div className="fw-bold">Attack</div>
                                </div>
                                <div className="text-center">
                                    <div className="defense">{data.defense}</div>
                                    <div className="fw-bold">Defense</div>
                                </div>
                                <div className="text-center">
                                    <div className="speed">{data.speed}</div>
                                    <div className="fw-bold">Speed</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default PokeItem
