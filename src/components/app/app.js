import React from 'react';
import {MainPage, CartPage, NoMatch} from '../pages';
import AppHeader from '../app-header';
import {Route,Switch} from 'react-router-dom';
import {SingleProduct} from '../pages'

import './app.scss'

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route exact path="/cart/">
                    <CartPage/>
                </Route>
                <Route exact path="/menu/:id" component={SingleProduct}/>
                <Route exact path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;