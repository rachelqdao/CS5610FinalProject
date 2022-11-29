import {createAsyncThunk} from "@reduxjs/toolkit"
import {findBookBySearchTerm} from "./search-services"

export const findBookBySearchTermThunk =
    createAsyncThunk(
    'findBookBySearchTerm',
        async (term) => await findBookBySearchTerm(term)
)