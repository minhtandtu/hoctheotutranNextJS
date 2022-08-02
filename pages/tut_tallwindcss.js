import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
export default function tutTailwindcss(){
    return(
        <>
        <div className = {styles.componentCenter}>
           
            <div className ={styles.linkbutton}>
            <Link href='/phimmoi'>
                <a >
                    <h2>Bấm vào đây để về đến trang Phim Mới được xây dựng bằng NextJS và TailwindCss &rarr;</h2>
                    
                    
                </a>
            </Link>
           
            </div>
        </div>
        </>
    )
}