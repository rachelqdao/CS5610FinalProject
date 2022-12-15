import axios from "axios";
const BOOK_CLUB_API = 'http://localhost:4000/book-clubs';

const api = axios.create({withCredentials: true});

export const createBookClub = async (bookClub) => {
    console.log(`in book club service with bc ${bookClub.name} and ${bookClub.ownerID.ownerID}`)
    const response = await api.post(BOOK_CLUB_API, bookClub);
    return response.data;
}

export const findBookClubByOwnerID = async (oid) => {
    const response = await api.get(`${BOOK_CLUB_API}/${oid}`);
    return response.data;
}

export const findAllBookClubs = async () => {
    const response = await api.get(BOOK_CLUB_API);
    return response.data;
}