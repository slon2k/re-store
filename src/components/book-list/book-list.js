import React from 'react'
import BookListItem from "../book-list-item";
import { connect } from 'react-redux'
import { booksLoaded } from "../../actions";
import { withBookStoreService } from '../hoc';
import { compose } from '../../utils';
import './book-list.css'
import Spinner from "../spinner";

class BookList extends React.Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded} = this.props;
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;
        const bookListItems = books.map((book) => {
            return (
                <li key={book.id}>
                    <BookListItem book={book} />
                </li>
            )
        });

        if (loading) {
            return <Spinner/>
        };

        return (
            <div>
                <ul>
                    {bookListItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({books, loading}) => {
    return { books, loading }
}

const mapDispatchToProps = {
    booksLoaded
}

//export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))

export default compose(
    withBookStoreService(), connect(mapStateToProps, mapDispatchToProps)
)(BookList)
