import React from 'react'
import { useModalContext } from './context/Modal-context'
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiHashnode } from 'react-icons/si';




export default function Footer() {

    const { selectedBgColor } = useModalContext();


    return (
        <footer className={`h-[60vh] ${selectedBgColor === "bg-black" ? " bg-[#191919] text-white 0" : "text-black bg-gray-300"}   text-center justify-evenly flex-col-reverse  flex`}>



            <div className='flex  justify-center gap-16'>
              <a href="https://github.com/harshalkolime"> <AiFillGithub  className='  p-1 rounded-lg w-8 h-8 ' /></a> 
              <a href="https://www.linkedin.com/in/harshal-koli-033935235/"> <BsLinkedin  className='  p-1 rounded-lg w-8 h-8 ' /></a> 
               <a href="https://hashnode.com/@0123123"> <SiHashnode  className='  p-1 rounded-lg w-8 h-8 ' /></a> 

            </div>

            <div>
                <ul className='flex justify-center gap-16  '>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                </ul>
            </div>






        </footer>
    )
}
