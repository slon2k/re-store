import React from 'react'
import BookListItem from "../book-list-item";

const BookList = ({books}) => {

    const bookListItems = books.map((book) => {
        return (
            <li>
                <BookListItem book={book} />
            </li>
        )
    });

    return (
        <div>
            <ul>
                {bookListItems}
            </ul>
        </div>
    )
}

export default BookList

