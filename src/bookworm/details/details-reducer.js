import {createSlice} from "@reduxjs/toolkit";
import {findBookByIDThunk} from "./services/details-thunks";

const initialState = {
    bookDetails: null,
    loading: false
}

const detailsReducer = createSlice({
    name: 'bookDetails',
    initialState,
    extraReducers: {
        [findBookByIDThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findBookByIDThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.bookDetails = action.payload
        }
    }
})

export default detailsReducer.reducer