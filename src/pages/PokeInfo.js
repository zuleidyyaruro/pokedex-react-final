import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import colorBack from '../helpers/colorBack';
import { getPoke } from '../services/getPoke';


const PokeInfo = () => {

    const { id } = useParams();

    const [dataPokeId, setDataPokeId] = useState({});

    useEffect(() => {
        getPoke(id).then(response => setDataPokeId(response.data))
    }, [id]);

    return (
        <>
            <NavBar />
            {
                dataPokeId.sprites &&
                <div style={{ backgroundColor: `${(colorBack(dataPokeId.types[0].type.name))[0]}` }} className='poke-info-container pt-3 d-flex flex-column justify-content-center '>

                    <div style={{ backgroundImage: `url(${(colorBack(dataPokeId.types[0].type.name))[1]}` }} className='poke-info-container-image d-flex justify-content-center'>
                        <img className='mt-2' src={dataPokeId.sprites.other.dream_world.front_default} alt="" />
                    </div>

                    {<h3 className='text-center text-capitalize mt-4'>{dataPokeId.name}</h3>}
                </div>
            }

            <div className='container text-center mt-4 '>
                <Link to={`/pokedex/${dataPokeId.id}/encounters`} className='btn btn-danger'>
                    Encounters
                </Link>
            </div>

            <div className='container mt-3 '>
                <h4 className='fw-bold '>Information</h4>
                {
                    dataPokeId.types &&
                    <div style={{ backgroundColor: `${(colorBack(dataPokeId.types[0].type.name))[0]}`, color: 'black' }} className=' poke-info-container-info p-2 d-flex justify-content-around rounded'>

                        <div className='d-flex flex-column'>
                            <span className='text-center fs-5'>{dataPokeId.height}</span>
                            <span className='fw-bold fs-5'>Height</span>
                        </div>

                        <div className='d-flex flex-column'>
                            <span className='text-center fs-5'>{dataPokeId.weight}</span>
                            <span className='fw-bold fs-5'>Weight</span>
                        </div>

                        <div className='d-flex flex-column'>
                            <span className='text-center fs-5'>{dataPokeId.order}</span>
                            <span className='fw-bold fs-5'>Order</span>
                        </div>
                    </div>
                }
            </div>

            <div className='container mt-3'>
                <h4 className='fw-bold'>Abilities</h4>
                <div className='container-habilities d-flex justify-content-center rounded'>
                    {
                        dataPokeId.abilities &&
                        
                        dataPokeId.abilities.map((element, i) => {
                            return <span style={{ backgroundColor: `${(colorBack(dataPokeId.types[0].type.name))[0]}`, color: 'black' }} className='text-center m-1 px-3 py-2 rounded text-capitalize' key={i + 1}>{element.ability.name}</span>
                        })
                    }
                </div>
            </div>

            <div className='container mt-3 d-flex flex-column mb-5'>

                <h4 className='fw-bold'>Moves</h4>
                <div className='container-moves'>
                    {
                        dataPokeId.moves &&
                        dataPokeId.moves.map((element, i) => {
                            return <span style={{ backgroundColor: `${(colorBack(dataPokeId.types[0].type.name))[0]}`, color: 'black' }} className='span-moves text-center m-1 px-3 py-2 rounded text-capitalize' key={i + 1}>{element.move.name}</span>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PokeInfo
