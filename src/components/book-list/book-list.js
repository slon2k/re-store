import React from 'react'
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'
import { booksLoaded } from "../../actions";
import { withBookStoreService } from '../hoc'

class BookList extends React.Component {

    componentDidMount() {
        const { bookStoreService } = this.props;
        const data = bookStoreService.getBooks();
        console.log(data, 'loaded');

        this.props.booksLoaded(data);
    }

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

const mapStateToProps = ({books}) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))


