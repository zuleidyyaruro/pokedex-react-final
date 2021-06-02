import React from 'react'
import pokeapi_256 from '../assets/img/pokeapi_256.png';
import useAuth from '../auth/useAuth';

const NavBar = () => {

    const auth=useAuth();

    return (
        <header>
            <div className="navbar navbar-dark bg-danger shadow-sm">
                <div className="container">

                    <img  src={pokeapi_256} alt="" />

                    <button onClick={auth.logout} className=" btn btn-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar
