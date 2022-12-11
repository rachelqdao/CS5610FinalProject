import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes/'

export const findBookByID = async (identifier) => {
    if (identifier.length === 0) {
        return []
    }

    const response = await axios.get(`${SEARCH_URL}${identifier}`)

    const BOOK_COVER_URL =
        `https://books.google.com/books/publisher/content/images/frontcover/${response.data.id}?fife=w400-h600&source=gbs_api`

    return {...response.data, 'bookCover': BOOK_COVER_URL}
}