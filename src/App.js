import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeComponent from "./bookworm/home";
import LoginComponent from "./bookworm/login";
import NavigationBar from "./bookworm/navigation";
import RegistrationComponent from "./bookworm/registration";
import SearchComponent from "./bookworm/search";
import DetailsComponent from "./bookworm/details";
import UsersComponent from "./bookworm/users";
import ProfileComponent from "./bookworm/profile/index.js";
import ProtectedRoute from "./bookworm/profile/protected-route";

import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit";
import SearchReducer from "./bookworm/search/search-reducer";
import DetailsReducer from "./bookworm/details/details-reducer";
import UsersReducer from "./bookworm/users/users-reducer"
import reviewsReducer from "./bookworm/reviews/reviews-reducer";
import readingListsReducer from "./bookworm/readinglists/reading-lists-reducer";
import bookReactionsReducer from "./bookworm/reactions/reactions-reducer.js"
import EditProfileComponent from "./bookworm/profile/edit-profile";
import BookClubsReducer from "./bookworm/book-clubs/book-clubs-reducer";

const store = configureStore({
    reducer: {
        bookClubs: BookClubsReducer,
        currentBookClub: BookClubsReducer,
        books: SearchReducer,
        booksByAuthor: SearchReducer,
        booksByKeyword: SearchReducer,
        bookDetails: DetailsReducer,
        users: UsersReducer,
        reviews: reviewsReducer,
        readingLists: readingListsReducer,
        reactions: bookReactionsReducer
    }
})

function App() {
    return (
        <div>
            <Provider store={store}>
                {/*<CurrentUser>*/}
                    <BrowserRouter>
                        <NavigationBar/>
                        <div className={'container'}>
                            <Routes>
                                <Route index element={<HomeComponent/>}/>
                                <Route path={'login'} element={<LoginComponent/>}/>
                                <Route path={'registration'} element={<RegistrationComponent/>}/>
                                <Route path={'search'} element={<SearchComponent/>}/>
                                <Route path={'details'} element = {<DetailsComponent/>}/>
                                <Route path={'users'} element = {<UsersComponent/>}/>
                                <Route path={'profile/*'} element = {
                                    <ProtectedRoute>
                                        <ProfileComponent/>
                                    </ProtectedRoute>
                                }/>
                                <Route path={'edit-profile'} element = {<EditProfileComponent/>}/>
                            </Routes>
                        </div>
                    </BrowserRouter>
                {/*</CurrentUser>*/}
            </Provider>
        </div>
    );
}

export default App;
