import React from 'react';
import { withBookStoreService } from '../hoc';
import {Route, Switch} from "react-router-dom";
import {HomePage, CartPage} from "../pages";


const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks())
    return (
        <div>
            <h2>App</h2>
            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/cart'} exact component={CartPage}/>
            </Switch>
        </div>
    )
}

export default withBookStoreService()(App)


