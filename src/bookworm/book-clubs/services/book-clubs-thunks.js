import {createAsyncThunk} from "@reduxjs/toolkit";
import {createBookClub } from "./book-clubs-service";

export const createBookClubThunk = createAsyncThunk(
    "createBookClub",
    async (bookClub) => createBookClub(bookClub)
)

