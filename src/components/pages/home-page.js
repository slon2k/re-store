import React from 'react';
import BookList from "../book-list";
import CartList from "../cart-list";

const HomePage = () => {
    return (
        <div>
            <BookList/>
            <CartList/>
        </div>
    )
}

export default HomePage