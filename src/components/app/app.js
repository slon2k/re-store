import React from 'react';
import {Route, Switch} from "react-router-dom";
import './app.css';
import {HomePage, CartPage} from "../pages";
import AppHeader from "../app-header";


const App = () => {
    return (
        <div className={'container'}>
            <AppHeader total={50} numItems={2}/>
            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/cart'} exact component={CartPage}/>
            </Switch>
        </div>
    )
}

export default App


