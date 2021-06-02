import React, { useEffect } from 'react'
import { useState } from 'react';
import { getLocationArea } from '../services/getEncounter';


const Location = ({ locationAreaUrl }) => {

    const [locationName, setLocationName] = useState('');
    const [locationRegion, setLocationRegion] = useState('');

    useEffect(() => {
        if (locationAreaUrl) {
            getLocationArea(locationAreaUrl.location.url)
                .then(response => {
                    setLocationName(response.data.name)
                    setLocationRegion(response.data.region.name)
                })
        }
    }, [locationAreaUrl]);

    return (
        <div className='d-flex justify-content-around  container-location rounded p-3 text-white'>
            <div className='d-flex flex-column mx-2'>
                <span className='text-capitalize text-center'>{locationRegion}</span>
                <span className='fw-bold text-center'>Region</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='text-capitalize text-center'>{locationName}</span>
                <span className='fw-bold text-center'>Location: </span>
            </div>
        </div>
    )
}

export default Location

