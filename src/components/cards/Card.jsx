import React, { useEffect } from 'react'
import { useModalContext } from '../context/Modal-context';


export default function Card({ project }) {

    const { selectedPrimaryColor } = useModalContext();
    const { selectedBgColor } = useModalContext();


    return (

        <div data-aos="zoom-out-up" data-aos-duration="500" className={`${selectedBgColor ==="bg-black" ? "bg-[#191919] text-white" : "bg-gray-100 shadow-xl "} w-[18rem] max-w-sm relative p-5  flex rounded-lg h-full  justify-center `}>

            <div>
            <div href="#" >
                <img className=" hover:scale-[1.1] transition-all ease-in-out  duration-500 rounded-t-lg absolute top-0 right-0 " src={project.image} alt="" />
            </div>
            <div className="pt-[12rem] flex flex-col justify-between ">
                <div href="#">
                    <h5 className="mb-2 text-xl font-bold text-center   ">{`${project.title}`}</h5>
                </div>
                <p className="mb-3 text-sm  ">{`${project.desc}`}</p>

                <div className='flex gap-5 items-center justify-center'>
                    <a href={`${project.demo}`} className={` ${selectedBgColor === "bg-black" ? "  text-white" : " text-white  shadow-xl "}  ${selectedPrimaryColor} inline-flex items-center px-3 py-2 text-sm font-medium text-center  hover:scale-[1.2] transition-all duration-500 rounded-sm  focus:ring-4 focus:outline-none `} >
                        Demo

                    </a>

                    {project.github ? <a href={`${project.github}`} className={` ${selectedBgColor === "bg-black" ? "  text-white" : " text-white  shadow-xl "} ${selectedPrimaryColor}  inline-flex items-center px-3 py-2 text-sm font-medium text-center  hover:scale-[1.2] transition-all duration-500 rounded-sm  focus:ring-4 focus:outline-none `}> Github


                    </a> : <a href={`${project.Drive}`} className={` ${selectedBgColor === "bg-black" ? "  text-white" : " text-white  shadow-xl "} ${selectedPrimaryColor}  inline-flex items-center px-3 py-2 text-sm font-medium text-center  hover:scale-[1.2] transition-all duration-500 rounded-sm  focus:ring-4 focus:outline-none `}>

                        Drive


                    </a>}

                </div>



            </div>




            </div>
           
        </div>




    )
}
