import React from 'react';
import Login from './components/Auth/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardTopNav from "./components/ReusableComponent/DashboardTopNav";
import SideBar from "../src/components/ReusableComponent/SideBar";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Login/>}/>
                    <Route path="/dashboard" element={<DashboardTopNav/>}/>
                    <Route path="/second-dashboard" element={<SideBar/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
