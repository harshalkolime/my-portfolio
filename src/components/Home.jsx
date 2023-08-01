import React, { useEffect } from 'react'
import homeimg from '../assets/homeimg.png'
import { Link } from 'react-scroll';
import { useModalContext } from './context/Modal-context'


export default function Home() {


  const { selectedPrimaryColor } = useModalContext();
  const { selectedBgColor } = useModalContext();
  
  return (
    <article id='home' className={`${selectedBgColor === "bg-black" ? " bg-[black] text-gray-500" : ""} flex flex-col   justify-between gap-6  h-[100vh] pt-[7rem] pb-20`}>
      <div className=' flex justify-center align-bottom '><img data-aos="fade-in" duration={2000} src={homeimg} alt="" className='rounded-tl-[50%] rounded-bl-[20px] w-[15rem]  rounded-br-[20px] rounded-tr-[50%]  ' /></div>
      <div data-aos="fade-up" className='w-[100%]  justify-center items-center align-middle flex flex-col gap-2' >  <h1 className='text-[2rem] font-bold text-white '> Harshal Koli</h1> <p className=' w-[30rem] text-sm text-gray-500 text-center'>You are a one click away from building you dream website or web app. Send me the details of your project for a modern, mobile responsive, higly performant webiste today! </p></div>
      <div data-aos="fade-up" data-aos-offset={200} duration={2000} className='aos-animate flex justify-center gap-8 h-11'>

      <Link  to="contact"> <button className={` text-white transition ${selectedPrimaryColor} ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-${selectedBgColor} duration-300 rounded-lg hover:bg-gray-500 hover:border-solid hover:border-2 w-[6rem] h-8`} >let's Talk</button> </Link>  
       <Link  to="portfolio"> <button className={` text-white transition ${selectedPrimaryColor} ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-${selectedBgColor} duration-300 rounded-lg hover:bg-gray-500 hover:border-solid hover:border-2 w-[6rem] h-8`}>My Work</button> </Link> 

      </div>

    </article>
  )
}
