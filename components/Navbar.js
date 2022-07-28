import React from "react";
import styles from "../styles/Home.module.css"
export default function Navbar(){
    return (
        <>
        <div className={styles.navbar1}>
            <div>
                <a href="/">Home Page </a>
            </div>
            <div>
            <a href="/about">About </a>
            <a href="/tut_data_fetching">All Coders </a>
            </div>
        </div>
        </>
    )
}