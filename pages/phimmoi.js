import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Head from "next/head";
export default function phimmoi(){
    return(
        <>
        <Head>
            <title>Phimmoi.net</title>
        </Head>
        <div className="grid grid-cols-5">
        <Nav/>
        <main className="col-span-4 bg-red-400">
            <p>https://nextjs.org/docs/messages/module-not-found
                wait  - compiling...
                event - compiled successfully in 127 ms (157 modules)
                wait  - compiling /phimmoi (client and server)...
                event - compiled client and server successfully in 226 ms (226 modules)
            </p>
        </main>
        </div>
        </>
    )
}