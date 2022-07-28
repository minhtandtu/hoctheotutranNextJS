
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props:{coders:data}
    };
} 
export default function CoderData({coders}){
    return(
        <>
        <Head>
            <title>Học về Data Fetching trong NextJS</title>
            <meta name="description" content="Data Fetching" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className = {styles.componentCenter}>
            <div>
                <h1> Data Fetching trong NextJS</h1>
                
                <h2>Danh Sách Coders 
                </h2>
            </div>
            <div className={styles.coderDataDiv} >
                {coders.map((coder) => 
                <Link href = {"../coders/" + coder.id} key={coder.id}>
                <a className={styles.coderData}>{coder.name}</a>
                </Link>
                )}
            </div>

        <div className ={styles.linkbutton}>
            <Link href='/'>
                <a >
                    <h2>Bấm vào đây để Back to Home Page &rarr;</h2>
                    <p>
                    Nút này dùng thẻ a lồng trong thẻ Link
                    </p>
                </a>
            </Link>
            </div>
        </div>
        </>
    )
}