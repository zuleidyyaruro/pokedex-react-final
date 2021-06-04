import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {getPokeUrl} from '../services/getPoke'
import PokeItem from './PokeItem'

const PokeGrid = ({urlPoke}) => {

    const [dataPokeUrl, setDataPokeUrl]=useState({})

    useEffect(()=>{
        getPokeUrl(urlPoke)
            .then(response=>setDataPokeUrl(response.data))
    }, [urlPoke]);

    return (
        <>
            {
                dataPokeUrl.sprites && <PokeItem dataPoke={dataPokeUrl}/>
            }
            
        </>
    )
}

export default PokeGrid
