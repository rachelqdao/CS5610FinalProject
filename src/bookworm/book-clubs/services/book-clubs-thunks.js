import {createAsyncThunk} from "@reduxjs/toolkit";
import {createBookClub, findAllBookClubs, findBookClubByOwnerID} from "./book-clubs-service";

export const createBookClubThunk = createAsyncThunk(
    "createBookClub",
    async (bookClub) => createBookClub(bookClub)
)

export const findBookClubByOwnerIDThunk = createAsyncThunk(
    'findBookClubByOwnerID',
    async (oid) => findBookClubByOwnerID(oid)
)

export const findAllBookClubsThunk = createAsyncThunk(
    "findAllBookClubs",
    async () => findAllBookClubs()
)

