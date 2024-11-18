import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../pages/login/login';
import Register from "../pages/register/register";
import Home from "../pages/home/home";

function Routers () {
    return (
        <>
            <Routes>
                <Route path="/" exact Component={Login}/>
                <Route path="/Register" Component={Register}/>
                <Route path="/Home" Component={Home}/>
            </Routes>
        </>
    )
}

export default Routers;