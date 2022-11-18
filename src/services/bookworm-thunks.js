import {createAsyncThunk} from "@reduxjs/toolkit"
import {findBookBySearchTerm} from "./bookworm-services"

export const findBookBySearchTermThunk =
    createAsyncThunk(
    'findBookBySearchTerm',
        async (term) => await findBookBySearchTerm(term)
)