import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByBookID, findReviewsByUserID} from "./reviews-service";

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

