import React from 'react'
import { useModalContext } from './context/Modal-context';
import { BsFillFileRuledFill } from 'react-icons/bs';



export default function Services() {


    const { selectedPrimaryColor } = useModalContext();
    const { selectedBgColor } = useModalContext();
    const { textColor } = useModalContext();


    return (
        <article id='services' className={`${textColor} ${selectedBgColor} h-full max-[1000px]:h-full gap-10 flex flex-col pt-20 items-center pb-40 `}>

            <div className=' items-center flex flex-col gap-5'>
                <h1 className=' font-bold text-[40px]'>My Services</h1>
                <p>I give you the best in all the services below</p>
            </div>

            <div className={` gap-8   flex flex-wrap justify-center `} >



                <div className={`max-w-sm  ${selectedBgColor === "bg-black" ? "bg-gray-900" : "bg-gray-200"} shadow-lg hover:border-[1px] border-solid border-black    hover:translate-y-[-22px] transition-all ease-in-out duration-500 h-[10rem] w-[35rem] flex gap-3 p-6 rounded-lg `}  >

                    <div className='w-[10rem] p-2' >

                        <BsFillFileRuledFill className="w-7 text-violet-800 h-8 hover:bg-white   mb-3" />
                    </div>
                    <div >
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">ui/ux Design</h5>
                        </a>
                        <p className="mb-3 text-sm">My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.</p>

                    </div>
                </div>

                <div className={`max-w-sm  ${selectedBgColor === "bg-black" ? "bg-gray-900" : "bg-gray-200"} shadow-lg hover:border-[1px] border-solid border-black    hover:translate-y-[-22px] transition-all ease-in-out duration-500 h-[10rem] w-[35rem] flex gap-3 p-6 rounded-lg `}  >

                    <div className='w-[10rem] p-2' >

                        <BsFillFileRuledFill className="w-7 text-violet-800 h-8 hover:bg-white   mb-3" />
                    </div>
                    <div >
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">ui/ux Design</h5>
                        </a>
                        <p className="mb-3 text-sm">My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.</p>

                    </div>
                </div>








            </div>

        </article>


    )
}
