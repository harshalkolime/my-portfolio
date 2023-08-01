import React, { useEffect } from 'react'
import about from '../assets/about.png'
import { useModalContext } from './context/Modal-context'
import Resume from '../assets/Resume.pdf'


export default function About() {



    const { selectedPrimaryColor } = useModalContext();
    const { selectedBgColor } = useModalContext();




    return (
        <article id='about' data-aos='fade-in' data-aos-offset={200} duration={2000} className={` gap-36 aos-init aos-animate justify-center transition-all ease-in-out duration-500 pb-36 ${selectedBgColor === "bg-black" ? "bg-[#262525]" : "bg-gray-200"} h-[full]   flex pt-40 max-[900px]:gap-0 pl-10 pr-10 `}>
        

                {/* img */}

                <div  ><img src={about} alt="" className={` max-[900px]:hidden ${selectedBgColor === "bg-black" ? "bg-black" : "bg-gray-300"}  w-[20rem] p-2 hover:p-0 transition-all ease-in-out duration-500`} /></div>

                {/* right sectioion */}

                <div className={`flex ${selectedBgColor === "bg-black" ? " text-white " : " "} flex-col  gap-8 justify-around  pb-5`}>
                    <div className=' text-4xl font-bold'><h1>About Me</h1></div>

                    <div className='text-gray-500 w-[full] '>
                        <p className='w-[20rem]'>Hi, my name is Harshal. I am a Front End Developer. Building Project that challenge my creativity has always been my passion. Being in the Web devlopment industry I have keen interest in developing new websites..</p>

                    </div>
                    <div className='h-[5rem]'><a href={Resume} download><button className={` text-white hover:border-white font-bold hover:border border-2 ${selectedPrimaryColor} transition ease-in-out delay-150  hover:-translate-y-3 duration-300  rounded-lg hover:border-${selectedPrimaryColor}  p-2 w-[12rem] `}>Download Resume ⤓</button></a></div>
                </div>


          


        </article>
    )
}
