import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import ContainerPokedex from '../pages/ContainerPokedex';
import Encounters from '../pages/Encounters';
import Error404 from '../pages/Error404';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import PokeInfo from '../pages/PokeInfo';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/pokedex' component={ContainerPokedex} />
                    <PrivateRoute exact path='/pokedex/:id' component={PokeInfo}/>
                    <PrivateRoute exact path='/pokedex/:id/encounters' component={Encounters}/> 
                    <Route exact path='/' component={HomePage} />
                    <Route path='*' component={Error404} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes
