import React, { useState } from 'react'
import { useHistory } from 'react-router';
import useAuth from '../auth/useAuth'

const Login = () => {

    const [queryUser, setQueryUser] = useState('');

    const auth = useAuth();
    const history = useHistory();

    const handleLogin = () => {
        auth.login(queryUser);
        history.push('/pokedex')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setQueryUser(e.target.value);
    }


    return (
        <div className='container container-login rounded mt-5'>
            <h2 className='text-center mt-3'>Login</h2>
            <div className="row">
                <div className="container-img col-sm-0 col-lg-5 mt-3 mb-3" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="" />
                </div>
                <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input onChange={handleChange} type="text" className="form-control" placeholder="Pokemon Trainer" />
                        </div>
                        <div className='text-center '>
                            <button onClick={handleLogin} className='btn btn-danger w-100'>LogIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
