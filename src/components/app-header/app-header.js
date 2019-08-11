import React from 'react';
import './app-header.css';

const AppHeader = ({numItems, total}) => {
    return(
        <header className={'app-header row'}>
            <a className={'logo text-dark'} href="#">ReStore</a>
            <a href="" className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart'/>
                {numItems}  items (${total})
            </a>
        </header>
    )
}

export default AppHeader
