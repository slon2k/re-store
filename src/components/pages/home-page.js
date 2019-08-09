import React from 'react';
import BookList from "../book-list";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Title 1',
            author: 'Author 1'
        },
        {
            id: 2,
            title: 'Title 2',
            author: 'Author 2'
        },
    ];

    return(
        <div>
            Home page
            <BookList books={books} />
        </div>
    )
}

export default HomePage