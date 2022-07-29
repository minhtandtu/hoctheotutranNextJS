// import React from "react";
// import Link from "next/link";
// import styles from "../styles/Home.module.css";
// import { useEffect } from "react";
// import { useRouter } from "next/router"

// export default function NotFound(){
//     const router = useRouter()
//     useEffect(() => {
//         setTimeout(() => {
//             router.push("/")
//         },5000)
//     },[])

//     return(
//         <>
//         <div className={styles.componentCenter}>
//             <h1>KHÔNG TÌM THẤY THÔNG TIN </h1>
//             <p>Tự động chuyển về Home trong 5s...</p>
//             <p>Tạo file tên 404.js, nextjs tự động chuyển đến trang này 
//                 nếu đường dẫn ko tìm thấy</p>
           
//             <div className ={styles.linkbutton}>
//                 <Link href='/'>
//                     <a >
//                         <h2>Bấm vào đây để về Home Page &rarr;</h2>
                        
//                     </a>
//                 </Link>
//             </div>
          
//         </div>
       
//         </>
//     )
    
// }