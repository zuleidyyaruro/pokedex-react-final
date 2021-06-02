import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PrivateRoute = ({component: Component, ...rest}) => {

    const auth=useAuth();

    return (
        <Route {...rest}>
            {
                auth.user ? <Component/> : <Redirect to='/login'/>
            }      
        </Route>
    )
}

export default PrivateRoute
