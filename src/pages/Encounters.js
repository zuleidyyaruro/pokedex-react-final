import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import NavBar from '../components/NavBar'
import { getEncounter } from '../services/getEncounter';
import { useState } from 'react';
import LocationArea from '../components/LocationArea';

const Encounters = () => {

    const { id } = useParams();
    const [dataEncounter, setDataEncounter] = useState([]);

    useEffect(() => {
        getEncounter(id)
            .then(response => setDataEncounter(response.data))
    }, [id]);

    const arrayLocationArea = dataEncounter.map((element, i) => {
        return <LocationArea key={i + 1} arrayLocationArea={element.location_area.url} />
    })

    return (
        <>
            <NavBar />
            <h1 className='mt-3 text-center'>Encounters</h1>
            {
                dataEncounter.length === 0 ?
                    <h2 className='text-center border'>No Encounter Found</h2>
                    :
                    <div className='container container-encounters mt-4  mb-5 '>
                        {arrayLocationArea}
                    </div>
            }
        </>
    )
}

export default Encounters
