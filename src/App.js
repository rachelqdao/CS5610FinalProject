import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeComponent from "./bookworm/home";
import LoginComponent from "./bookworm/login";
import NavigationBar from "./bookworm/navigation";
import RegistrationComponent from "./bookworm/registration";
import SearchComponent from "./bookworm/search";

function App() {
    return (
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
                    {/*<Route path={'profile'} element={}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
