import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
export default function(){
    return(
        <>
        <div className = {styles.componentCenter}>
            <div>
            <h1> This is About Us</h1>
            <p>Để chuyển trang 1 cách nhanh chóng chúng ta dùng thẻ Link bọc bên ngoài thẻ a so với chỉ dùng thẻ a,
                 như vậy sẽ chuyển trang nhanh hơn rất nhiều do...</p>
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