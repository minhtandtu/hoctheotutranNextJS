import React from "react";
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticPaths = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((coder)=>{
        return {
            params:{id:coder.id.toString()}
        }
    })
    return {
        paths,
        fallback:false,
    }
}
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json();
    
    return {
        props:{coder: data}
    }
}
export default function AllCoder({coder}){
    return(
        <>
        <div className ={styles.componentCenter}>
           
            <h1>This is {coder.name} 's Info</h1>
            <div className={styles.coderInfo}>
            <p>Company name: {coder.company.name} </p>  
            <p>Email: {coder.email} </p> 
           <p>Address: {coder.address.street} </p> 
           </div>
        </div>
        </>
    )
}