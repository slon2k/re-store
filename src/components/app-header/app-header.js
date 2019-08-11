import React from 'react';
import './app-header.css';
import {Link} from "react-router-dom";


const AppHeader = ({numItems, total}) => {
    return(
        <header className={'app-header row'}>
            <Link to='/'>
                <div className={'logo text-dark'} href="#">ReStore</div>
            </Link>
            <Link to='/cart'>
                <div href="" className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems}  items (${total})
                </div>
            </Link>
        </header>
    )
}

export default AppHeader
