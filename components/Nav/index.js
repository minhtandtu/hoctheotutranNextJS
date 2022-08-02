import React from "react";
import { BiHomeAlt,BiMoviePlay, BiInfoCircle } from "react-icons/bi";
import Link from "next/dist/client/link";
const defaultIconSize = '1.875rem';
const items=[
    {laber:'Home', icon:<BiHomeAlt size={defaultIconSize}/>, active:true},
    {laber:'Movies', icon:<BiMoviePlay size={defaultIconSize}/> },
    {laber:'About', icon:<BiInfoCircle size={defaultIconSize}/> }
]
export default function Nav(){
    return (
        <>
      
        <nav className='col-span-1 bg-cyan-200'>
            <div className='mx-4 justify-between items-center' >
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right ">
                    Phimmoi.net
                </h4>
            </div>
            <ul className='mx-4 my-2'>
                <li className="flex p-2 justify-end items-center cursor-pointer bg-primary text-white">
                    <h3>Home</h3>
                    <BiHomeAlt size='1.875rem'/>

                </li>
            </ul>
        </nav>
        </>
    )
}