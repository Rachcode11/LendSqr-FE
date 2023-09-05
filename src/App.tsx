import React from 'react';
import Login from './components/Auth/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MiddleSection from "./components/Dashboard/MiddleSection";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<MiddleSection/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
