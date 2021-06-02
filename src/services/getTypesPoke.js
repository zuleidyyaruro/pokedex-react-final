import axios from 'axios';

const getTypesPoke=()=>{

    const url='https://pokeapi.co/api/v2/type'
    const promise=axios.get(url);
    return promise;
}

export default getTypesPoke;