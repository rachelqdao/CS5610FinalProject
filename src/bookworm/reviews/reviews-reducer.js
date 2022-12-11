import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsByBookIDThunk, findReviewsByUserIDThunk} from "./services/reviews-thunk";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsByBookIDThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByUserIDThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload

        }
    }
})

export default reviewsReducer.reducer