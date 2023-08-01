import React from 'react'
import { useModalContext } from './context/Modal-context'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoBlender } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function Archviz() {



  const { selectedPrimaryColor } = useModalContext();
  const { selectedBgColor } = useModalContext();
  



  return (
    <article className={` ${selectedBgColor==="bg-black"? "bg-[#191919] text-white ":"bg-gray-200"} pt-20 pb-32 p-5 gap-16  flex flex-col `} >

      <div>
        <h1 className=' text-center text-[30px] font-semibold'>What are my Core Skills</h1>
      </div>
      <div className='h-[20rem] ' >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500, // Adjust the delay value (in milliseconds) to change the autoplay speed
          }}
          loop={true}
          className=" mySwiper h-[20rem]  flex flex-col justify-center"
         >

          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><BiLogoJavascript className='w-[8rem] text-yellow-300 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>Javascript</h1></SwiperSlide>
          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><BiLogoReact className='w-[8rem] text-blue-400 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>React</h1></SwiperSlide>
          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><BiLogoCss3  className='w-[8rem] text-blue-600 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>Css3</h1></SwiperSlide>
          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><AiFillHtml5 className='w-[8rem] text-orange-500 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>Html5</h1></SwiperSlide>
          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><BiLogoTailwindCss className='w-[8rem] text-blue-500 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>Tailwind</h1></SwiperSlide>
          <SwiperSlide className={`h-[15rem] w-[15rem] max-[700px]:h-[10rem] max-[700px]:w-[10rem] ${selectedBgColor==="bg-black"? "bg-black text-white ":"bg-white"} shadow-lg text-gray-800 cursor-grab rounded-md p-5  text-center flex  justify-center items-center flex-col `} ><BiLogoBlender  className='w-[8rem] text-orange-400 h-[8rem]' /><h1 className=' font-bold text-[1.5rem]'>Blender</h1></SwiperSlide>
        </Swiper>     </div>







    </article>




  )
}
