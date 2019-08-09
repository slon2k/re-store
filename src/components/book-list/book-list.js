import React from 'react'
import BookListItem from "../book-list-item";
import {connect} from 'react-redux'

class BookList extends React.Component {

    render() {
        const {books} = this.props;
        const bookListItems = books.map((book) => {
            return (
                <li key={book.id}>
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
}

const mapStateToProps = (state) => {
    return {books: state.books}
}

export default connect(mapStateToProps)(BookList)


