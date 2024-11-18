import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../pages/login/login';
import Register from "../pages/register/register";

function Routers () {
    return (
        <>
            <Routes>
                <Route path="/" exact Component={Login}/>
                <Route path="/Register" exact Component={Register}/>
            </Routes>
        </>
    )
}

export default Routers;