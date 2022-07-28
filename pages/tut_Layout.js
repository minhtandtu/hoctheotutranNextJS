import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function tut_layout(){
    return(
        <>
        <div className={styles.componentCenter}>
            
            <h1>Hướng Dẫn Tạo Layout chứa Navigation Menu và Footer trong mọi page</h1>
            <p>Tạo 1 folder tên là components chưa các file: Layout.js, Footer.js, Navbar.js {'(tên file phải chính xác, sai tên là ko chạy )'} </p>
            <p>Layout.js:</p>
            <p>_app.js: </p>
            <p> </p>
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