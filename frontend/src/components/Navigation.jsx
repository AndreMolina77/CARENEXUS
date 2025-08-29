import React from "react"
import NavBar from "./NavBar.jsx"
import {Route, Routes} from "react-router-dom"
import Inicio from "../pages/Inicio.jsx"

function Navigation() {
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={ <Inicio/> }></Route>
        </Routes>
        </>
    )
}

export default Navigation;