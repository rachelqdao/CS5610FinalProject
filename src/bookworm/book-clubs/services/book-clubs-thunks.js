import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addMemberToBookClub,
    createBookClub,
    findAllBookClubs,
    findBookClubByOwnerID,
    findMembersByBCID
} from "./book-clubs-service";

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

export const findMembersByBCIDThunk = createAsyncThunk(
    "findMembersByBCID",
    async (bcID) => findMembersByBCID(bcID)
)

export const addMemberToBookClubThunk = createAsyncThunk(
    'addMemberToBookClub',
    async ({bcID, mid, username}) => addMemberToBookClub(bcID, mid, username)
)

// export const addMemberToBookClubThunk = createAsyncThunk(
//     "addMemberToBookClub",
//     async (bcID, mid, username) => addMemberToBookClub(bcID, mid, username)
// )
