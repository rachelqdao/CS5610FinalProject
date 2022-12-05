import {createAsyncThunk} from "@reduxjs/toolkit"
import {findAllUsers} from "./users-service"

export const findAllUsersThunk =
    createAsyncThunk(
        'findAllUsers', async () => await findAllUsers()
    )