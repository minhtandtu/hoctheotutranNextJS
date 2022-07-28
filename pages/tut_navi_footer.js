import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function (){
    return(
        <>
        <div className={styles.componentCenter}>
            
            
            <h1>Hướng Dẫn Tạo Navigation Menu và Footer</h1>
            <p>Tạo file: /components/Navbar.js và file: /components/Footer.js</p>
            <p>Sai Tên file thì sẽ không hoạt động</p>
            
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