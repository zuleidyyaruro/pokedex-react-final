import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../auth/useAuth';
import NavBar from '../components/NavBar';
import PokeGrid from '../components/PokeGrid';

import PokeItem from '../components/PokeItem';
import SearchPoke from '../components/SearchPoke';
import SearchType from '../components/SearchType';
import { getPoke } from '../services/getPoke';
import getPokeByTypes from '../services/getPokeByType';
import getTypesPoke from '../services/getTypesPoke';

const ContainerPokedex = () => {

    const auth = useAuth();

    // estado para almacenar la busqueda de un pokemon
    const [queryPokemon, setQueryPokemon] = useState('');
    // estado para almacenar toda la data de un pokemon
    const [dataPoke, setDataPoke] = useState({});
    // estado para almacenar la busqueda de los tipos de pokemones
    const [typesPokes, setTypesPokes] = useState([]);
    // estado para la busqueda por tipo
    const [queryTypePoke, setQueryTypePoke] = useState('');
    // estado para todos los pokemones de un tipo
    const [dataTypePoke, setDataTypePoke] = useState([])
    // bandera para saber si se está buscando por tipo o no
    const [isSearchinByType, setIsSearchingByType] = useState(false);

    // useEffect para obtener un pokemon
    useEffect(() => {
        getPoke(queryPokemon)
            .then(response => setDataPoke(response.data)
            )
    }, [queryPokemon]);

    // useEffect para obtener los tipos
    useEffect(() => {
        getTypesPoke()
            .then(response => setTypesPokes(response.data.results))
    }, []);

    // useEffect para obtener todos los pokemones de un tipo
    useEffect(() => {
        getPokeByTypes(queryTypePoke)
            .then(response => setDataTypePoke(response.data.pokemon))
    }, [queryTypePoke]);


    return (
        <div>
            <NavBar />
            <h2 className='text-center mt-3'>Hello, Welcome {auth.user} </h2>
            <div className="container">
                <SearchPoke setQueryPokemon={setQueryPokemon} setIsSearchingByType={setIsSearchingByType} />
                <SearchType typesPokes={typesPokes} setQueryTypePoke={setQueryTypePoke} setIsSearchingByType={setIsSearchingByType} />
            </div>

            <div className="container d-flex justify-content-center flex-wrap mt-4 mb-5">
                {
                    isSearchinByType
                        ?
                        dataTypePoke && (
                            dataTypePoke.map(element => {
                                return <PokeGrid key={element.pokemon.url} urlPoke={element.pokemon.url} />
                            })
                        )
                        :
                        dataPoke.sprites && <PokeItem dataPoke={dataPoke} />
                }
            </div>
        </div>
    )
}

export default ContainerPokedex
