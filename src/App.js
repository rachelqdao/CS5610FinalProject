import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeComponent from "./bookworm/home";
import LoginComponent from "./bookworm/login";
import NavigationBar from "./bookworm/navigation";
import RegistrationComponent from "./bookworm/registration";
import SearchComponent from "./bookworm/search";
import DetailsComponent from "./bookworm/details";

import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit";
import SearchReducer from "./bookworm/search/search-reducer";
import DetailsReducer from "./bookworm/details/details-reducer";

const store = configureStore({
    reducer: {
        books: SearchReducer, bookDetails: DetailsReducer
    }
})

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={'container'}>
                    <div className={"pt-3"}>
                        <NavigationBar/>
                    </div>
                    <hr/>

                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path={'login'} element={<LoginComponent/>}/>
                        <Route path={'registration'} element={<RegistrationComponent/>}/>
                        <Route path={'search'} element={<SearchComponent/>}/>
                        <Route path={'details'} element = {<DetailsComponent/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
