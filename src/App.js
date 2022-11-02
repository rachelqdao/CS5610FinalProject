import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./bookworm/home";

function App() {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Routes>
                    <Route index element={<HomeScreen/>}/>
                    {/*<Route path={'profile'} element={}/>
                    <Route path={'search'} element={}/>
                    <Route path={'login'} element={}/>
                    <Route path={'registration'} element={}{}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
