import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q='

// search by book title
export const findBookBySearchTerm = async (term) => {
    if (term.length === 0) {
        return []
    }

    const books = []

    const response = await axios.get(`${SEARCH_URL}${term}&maxResults=40`)

    for (let index = 0; index < response.data.items.length; ++index) {
        let book = response.data.items[index];

        const BOOK_COVER_URL =
            `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`
        book = {...book, 'bookCover': BOOK_COVER_URL}

        books.push(book)
    }

    return books
}

// search by author of the week
export const findBookByAuthor = async(author) => {
    const booksByAuthor = []

    const response = await axios.get(`${SEARCH_URL}${author}+inauthor:${author}&maxResults=20`)

    for (let index = 0; index < response.data.items.length; ++index) {
        let book = response.data.items[index];

        const BOOK_COVER_URL =
            `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`
        book = {...book, 'bookCover': BOOK_COVER_URL}

        booksByAuthor.push(book)
    }

    return booksByAuthor
}

// search by keyword in title
export const findBookByKeyword = async(keyword) => {
    const booksByKeyword = []

    const response = await axios.get(`${SEARCH_URL}${keyword}+intitle:${keyword}&maxResults=20`)

    for (let index = 0; index < response.data.items.length; ++index) {
        let book = response.data.items[index];

        const BOOK_COVER_URL =
            `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`
        book = {...book, 'bookCover': BOOK_COVER_URL}

        booksByKeyword.push(book)
    }

    return booksByKeyword
}
