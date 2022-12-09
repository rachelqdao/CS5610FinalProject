import {createSlice} from "@reduxjs/toolkit"
import {findAllUsersThunk, loginThunk, registerThunk, profileThunk, logoutThunk} from "./users-thunks";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
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
        },

        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            console.log(state.currentUser)
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },

        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },

        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },

        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },

        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        }
    }
})

export default usersReducer.reducer