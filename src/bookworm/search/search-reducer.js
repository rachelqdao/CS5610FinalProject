import {createSlice} from "@reduxjs/toolkit";
import {findBookBySearchTermThunk} from "../../services/bookworm-thunks"

const initialState = {
    books: [],
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
            }
        }
    }
)

export default searchReducer.reducer