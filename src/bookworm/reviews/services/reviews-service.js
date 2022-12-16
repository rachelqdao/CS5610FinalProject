import axios from "axios";
import {findUserByID} from "../../users/users-service";

const REVIEW_API = 'http://localhost:4000/reviews'
const BOOK_REVIEWS_API = 'http://localhost:4000/reviews/books'
const USER_REVIEWS_API = 'http://localhost:4000/reviews/users'
const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes/'

const api = axios.create({withCredentials: true})

export const createReview = async (review) => {
    const bookInfo = await axios.get(`${SEARCH_URL}${review.bookID}`)
    review = {...review, title: bookInfo.data.volumeInfo.title}
    const response = await api.post(REVIEW_API, review)

    /*stimulate populating object right after creation for display purposes*/
    response.data.userID = await findUserByID(response.data.userID)

    return response.data
}

export const findReviewsByBookID = async (bookID) => {
    const response = await api.get(`${BOOK_REVIEWS_API}/${bookID}`)
    return response.data
}

export const findReviewsByUserID = async (userID) => {
    const response = await api.get(`${USER_REVIEWS_API}/${userID}`)
    return response.data
}

export const deleteReview = async (reviewID) => {
    const response = await api.delete(`${REVIEW_API}/${reviewID}`)
    return response.data
}

export const findAllReviews = async () => {
    const response = await api.get(REVIEW_API)
    return response.data
}