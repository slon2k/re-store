const initialState = {
    books: [
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
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }


}

export default reducer;