import React, { useEffect } from 'react'
import { getLocationArea } from '../services/getEncounter';
import { useState } from 'react';
import Location from './Location';

const LocationArea = ({ arrayLocationArea }) => {

    const [locationAreaUrl, setLocationAreaUrl] = useState({});

    useEffect(() => {
        if (arrayLocationArea) {
            getLocationArea(arrayLocationArea)
                .then(response => setLocationAreaUrl(response.data))
        }
    }, [arrayLocationArea]);

    return (
        <>
            {
                locationAreaUrl.location && <Location locationAreaUrl={locationAreaUrl} />
            }
        </>
    )
}

export default LocationArea
