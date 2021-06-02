import axios from 'axios';

export const getEncounter=(id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
    const promise=axios.get(url);
    return promise;
}

export const getLocationArea=(url)=>{
    const promise=axios.get(url);
    return promise;
}


