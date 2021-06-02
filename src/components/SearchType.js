import React from 'react';
import { useForm } from 'react-hook-form';

const SearchType = ({typesPokes, setQueryTypePoke, setIsSearchingByType}) => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        setQueryTypePoke(data.option);
        setIsSearchingByType(true);
        reset();
    } 

    const typesPokesMap=typesPokes.map(element=>{
        return <option key={element.name} value={element.name}>{element.name}</option>
    })

    return (
        <form className='mt-4 rounded text-center' onSubmit={handleSubmit(onSubmit)}>
            <select className='w-75 p-2 mx-2 text-capitalize rounded border-1' {...register('option')}>
                <option className='text-capitalize' value="">Seleccione una Opcion</option>
                {typesPokesMap}
            </select>

            <button className='btn btn-danger btn-sm'>Search</button>
        </form>
    )
}

export default SearchType
