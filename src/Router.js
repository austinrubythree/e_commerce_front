import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import Cartpage from './pages/cartpage'
import CheckOut from './pages/checkout'
import Done from './pages/done'

const Router = () => (
    <Switch>
        <Route exact path='/' component ={ HomePage } />
        <Route exact path='/cart' component= { Cartpage }/>
        <Route exact path='/checkout' component={ CheckOut }/>
        <Route exact path='/done' component= { Done }/>

    </Switch>
)
export default Router;