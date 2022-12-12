import {createAsyncThunk} from "@reduxjs/toolkit"
import {findAllUsers, register, login, logout, profile, findUserByID} from "./users-service"

export const findAllUsersThunk =
    createAsyncThunk(
        'findAllUsers', async () => await findAllUsers()
    )

export const findUserByIDThunk =
    createAsyncThunk(
        'findUserByID', async (userID) => await findUserByID(userID)
    )

export const registerThunk =
    createAsyncThunk(
        'register', async (user) => await register(user)
    )

export const loginThunk =
    createAsyncThunk(
        'login', async (user) => await login(user)
    )

export const logoutThunk =
    createAsyncThunk(
        'logout', async () => await logout()
    )

export const profileThunk =
    createAsyncThunk(
        'login', async () => await profile()
    )

