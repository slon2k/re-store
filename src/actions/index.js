const booksLoaded = (books) => {
    return {
        type: 'BOOKS_LOADED',
        payload: books
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

export {
    booksLoaded,
    booksRequested
}