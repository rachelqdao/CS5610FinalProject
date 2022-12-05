import {createSlice} from "@reduxjs/toolkit"
import {findAllUsersThunk} from "./users-thunks";

const initialState = {
    users: [],
    loading: false
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findAllUsersThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
            console.log(state.users)
        }
    }
})

export default usersReducer.reducer