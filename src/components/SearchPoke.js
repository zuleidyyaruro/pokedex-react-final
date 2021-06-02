import React from 'react';
import { useForm } from 'react-hook-form';

const SearchPoke = ({ setQueryPokemon, setIsSearchingByType }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setQueryPokemon(data.namepoke);
        setIsSearchingByType(false)
        reset();
    }

    return (
        <form className='mt-4 rounded text-center ' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-75 p-2 mx-2 rounded border-1' type='text' placeholder='Please Write The Name Of The Pokemon You Are Looking For' {...register("namepoke")} />
            <button className='btn btn-danger btn-sm '>Search</button>
        </form>
    )
}

export default SearchPoke
