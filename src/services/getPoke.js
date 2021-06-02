import axios from 'axios';

export const getPoke=(poke)=>{
    
    const url=`https://pokeapi.co/api/v2/pokemon/${poke}`
    const promise=axios.get(url);
    return promise;
}

export const getPokeUrl=(url)=>{

    const promise=axios.get(url);
    return promise;
}

