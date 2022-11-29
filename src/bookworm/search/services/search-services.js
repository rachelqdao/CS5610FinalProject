import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const findBookBySearchTerm = async (term) => {
    if (term.length === 0) {
        return []
    }

    const response = await axios.get(`${SEARCH_URL}${term}&maxResults=40`)
    return response.data.items
}
