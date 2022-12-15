import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, deleteReview, findAllReviews, findReviewsByBookID, findReviewsByUserID} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)

export const findReviewsByBookIDThunk = createAsyncThunk(
    'findReviewsByBookID',
    async (bookID) => findReviewsByBookID(bookID)
)

export const findReviewsByUserIDThunk = createAsyncThunk(
    'findReviewsByUserID',
    async (userID) => findReviewsByUserID(userID)
)

export const deleteReviewThunk = createAsyncThunk(
    'deleteReview', async (reviewID) => deleteReview(reviewID)
)

export const findAllReviewsThunk = createAsyncThunk(
    'findAllReviewsThunk', async () => findAllReviews()
)
