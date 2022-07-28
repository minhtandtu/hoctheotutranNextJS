import React from "react";
import styles from "../styles/Home.module.css"
import Link from "next/dist/client/link";
export default function Navbar(){
    return (
        <>
        <div className={styles.navbar1}>
            <div>
                <Link href ="/">
                    <a>Home Page </a>
                </Link>
            </div>
            <div>
            <Link href="/about">
                <a>About</a> 
            </Link>
            <Link href="/tut_data_fetching">
                <a>All Coders </a>
            </Link>
            </div>
        </div>
        </>
    )
}