import axios from 'axios';

const getPokeByTypes=(id)=>{
    const url=`https://pokeapi.co/api/v2/type/${id}`
    const promise=axios.get(url);
    return promise;
}

export default getPokeByTypes;