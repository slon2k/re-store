export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Title 1',
                author: 'Author 1',
                price: 15,
                coverImage: 'https://m.media-amazon.com/images/G/01/img14/books/icons/11753_books_holiday-branding-icon-evergreen-06.jpg'
            },
            {
                id: 2,
                title: 'Title 2',
                author: 'Author 2',
                price: 20,
                coverImage: 'https://m.media-amazon.com/images/G/01/img14/books/icons/11753_books_holiday-branding-icon-evergreen-07.jpg'
            },
        ];
    }
}