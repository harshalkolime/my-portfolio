import React, { useEffect } from 'react'
import { useModalContext } from './context/Modal-context'
import { AiOutlineMail } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";



export default function Contact() {


  const { selectedPrimaryColor } = useModalContext();
  const { selectedBgColor } = useModalContext();




  

  return (
    <article id='contact' className={` ${selectedBgColor === "bg-black" ? "bg-black text-white" : "bg-gray-500"}  h-[full] text-center justify-around  flex flex-col  p-8`}>
      <div className='text-white p-12'>
        <h1 className='p-5 text-5xl font-semibold'>Get in Touch</h1>
        <p className=''>Shoot me a message via any of the links below</p>
      </div>
      <div data-aos-duration='500' data-aos="fade-up"  className=' max-[500px]:flex-col flex items-center justify-center gap-16 w-[full]  '>

       <a href="mailto:harshalkoli234@gmail.com"><AiOutlineMail className={` ${selectedPrimaryColor}  hover:translate-y-[-10px] transition-all duration-500 ease-in-out w-[6rem] h-[5rem] rounded-3xl text-white p-2 `}/></a> 
       <a href="https://www.instagram.com/hrshllll/"><RiInstagramLine className={`${selectedPrimaryColor} hover:translate-y-[-10px] transition-all duration-500 ease-in-out w-[6rem] h-[5rem] rounded-3xl text-white p-2 `} /></a> 
       <a href="https://github.com/harshalkolime"><FaWhatsapp className={` ${selectedPrimaryColor} hover:translate-y-[-10px] transition-all duration-500 ease-in-out w-[6rem] h-[5rem] rounded-3xl text-white p-2 `} /></a> 
      </div>

    </article>
  )
}
