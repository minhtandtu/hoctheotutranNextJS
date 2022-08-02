import React from "react";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer";
export default function Layout({children}){
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}