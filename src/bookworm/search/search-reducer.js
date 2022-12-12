import {createSlice} from "@reduxjs/toolkit";
import {findBookBySearchTermThunk, findBookByAuthorThunk, findBookByKeywordThunk} from "./services/search-thunks"

const initialState = {
    books: [],
    booksByAuthor: [],
    booksByKeyword: [],
    loading: false
}

const searchReducer = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [findBookBySearchTermThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findBookBySearchTermThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.books = action.payload
        },
        [findBookByAuthorThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findBookByAuthorThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.booksByAuthor = action.payload
        },
        [findBookByKeywordThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findBookByKeywordThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.booksByKeyword = action.payload
        }
    }
}
)

export default searchReducer.reducer