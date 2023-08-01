import React from 'react'
import data from './data/data'
import Card from './cards/Card'
import { useModalContext } from './context/Modal-context';
import { useState,useEffect } from 'react';


export default function Portfolio() {

  const { selectedBgColor } = useModalContext();


  const [selectedCategory, setSelectedCategory] = useState(data);

 






  return (
    <article id='portfolio' className={` ${selectedBgColor === "bg-black" ? " bg-black text-white" : "bg-white"} h-[full] pt-20 pb-10 gap-8 flex flex-col items-center text-center `}  >
      

      <div className='flex flex-col gap-10'>
        <h1 className=' text-5xl'>Recent Projects</h1>
        <p className=''>Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories</p>
      </div>

      <div className='flex  gap-5'>
        <button type="button" onClick={()=>setSelectedCategory(data)} className={`${selectedBgColor === "bg-black" ? "bg-[#191919] " : "bg-gray-200"} focus-within:bg-gray-500 hover:bg-gray-400 transition-all duration-500 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  `} >All</button>
        <button type="button" onClick={()=>setSelectedCategory(data.filter((project)=>project.category==='uiux'))} className={`${selectedBgColor === "bg-black" ? "bg-[#191919] " : "bg-gray-200"}  focus-within:bg-gray-500 hover:bg-gray-400 transition-all duration-500 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  `} >Ui/Ux</button>
        <button type="button" onClick={()=>setSelectedCategory(data.filter((project)=>project.category==='frontend'))} className={`${selectedBgColor === "bg-black" ? "bg-[#191919] " : "bg-gray-200"} focus-within:bg-gray-500  hover:bg-gray-400 transition-all duration-500 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  `} >FrontEnd</button>
        <button type="button" onClick={()=>setSelectedCategory(data.filter((project)=>project.category==='ArchViz'))} className={`${selectedBgColor === "bg-black" ? "bg-[#191919] " : "bg-gray-200"} focus-within:bg-gray-500  hover:bg-gray-400 transition-all duration-500 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  `} >Archviz</button>

      </div>

      <div className='flex  flex-wrap gap-8 p-8 justify-center'>
        {selectedCategory.map((project) => {


          return <div key={project.id}>< Card project={project} /></div>

        })}
      </div>




    </article>





  )
}
