import React from 'react'
import { Link } from 'react-router-dom';
import colorBack from '../helpers/colorBack';

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
        'color':colorBack(dataPoke.types[0].type.name),
    }

    return (
        <>
            {
                data.image && (

                    <div style={{backgroundColor: data.color[0]}} className='card-container overflow-hidden rounded'>
                        <Link to={`/pokedex/${data.id}`}>
                            
                            <div className='image mt-3' style={{backgroundImage: `url(${data.color[1]})`}} >
                                <img src={data.image} alt="pokemon" />
                            </div>
                            <div className="personal-data-container">
                                <span className='name fw-bold text-capitalize'>{data.name}</span>
                                <p className='type text-capitalize'>{data.type}</p>
                            </div>
                            <div>

                            
                            <div className="stats-container">
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
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default PokeItem
