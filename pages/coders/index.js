import React from "react";
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
export default function(){
    return(
        <>
        <div className = {styles.componentCenter}>
            <div>
            <h1> Coder - Index</h1>
            
            </div>
            <div className ={styles.linkbutton}>
            <Link href='/'>
                <a >
                    <h2>Bấm vào đây để về Home Page &rarr;</h2>
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