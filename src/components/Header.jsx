import React, { useEffect, useState } from 'react'
import icon from '../assets/icon.png'
import theme from '../assets/theme.svg'
import { useModalContext } from './context/Modal-context'
import { AiOutlineMail } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {Link} from 'react-scroll'




export default function Header() {


  //theme selector
  const { setShowModal } = useModalContext();
  const { showModalHandler } = useModalContext();

  //theme changer
  const { selectedPrimaryColor } = useModalContext();
  const { selectedBgColor } = useModalContext();




  //icons drop
  const [drop, setdrop] = useState(false);
  const [navVisible, setNavVisible] = useState(false)



  return (
    <header>
      <nav className={`navbar  ${selectedPrimaryColor} transition-all ease-in-out  fixed w-full z-30 top-0 left-0 h-16 border-gray-200 `}>
        <div className="max-w-screen-xl  flex  items-center justify-between mx-auto p-3 ">
          <div href="" className="flex pointer flex-col align-top justify-center ">
            <img src={icon} onClick={() => setdrop(!drop)} className="  h-12 cursor-pointer  mr-2 rounded-[50%]" alt="Flowbite Logo" />
            <div className='flex flex-col  align-middle'>

              {/* drop down menu */}

              <div id="dropdownInformation" className={`${drop ? "" : " hidden"}  transition-all ease-in-out duration-500 transition-all-[5sec]  absolute bg-transparent divide-y rounded-lg`}>
                <ul className=" transition-all ease-in-out duration-500 text-sm" aria-labelledby="dropdownInformationButton">

                  <li>
                    <a href="https://www.instagram.com/hrshllll/" target='_blank' className="block m-2 px-1 py-1 rounded-md bg-gray-100 hover:bg-gray-100 "><RiInstagramLine /> </a>
                  </li>
                  <li>
                    <a href="mailto:harshalkoli234@gmail.com" target='_blank' className="block m-2 px-1 py-1 rounded-md bg-gray-100 hover:bg-gray-100 "><AiOutlineMail /> </a>
                  </li>
                  <li>
                    <a href="https://github.com/harshalkolime" target='_blank' className="block m-2 px-1 py-1 rounded-md bg-gray-100 hover:bg-gray-100 "><AiFillGithub /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/harshal-koli-033935235/" target='_blank' className="block m-2 px-1 py-1 rounded-md bg-gray-100 hover:bg-gray-100 "><BsLinkedin /></a>
                  </li>


                </ul>

              </div>
            </div>

          </div>

          {/* color pallate icon */}
          <div className="flex md:order-2">
            <button type="button" onClick={showModalHandler} className=" bg-white  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"><img src={theme} alt="" /> </button>
            <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setNavVisible(!navVisible)} className=" min-[769px]:hidden inline-flex text-white items-center p-2 w-10 h-10 justify-center text-sm hover:text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* home */}
          <div className={`items-center transition-all duration-500 ease-in-out max-[768px]:hidden w-[20rem] `} id="navbar-sticky">
            <ul className=" cursor-pointer justify-center flex bg-transparent text-white font-medium ">
              <li>
                <Link to="home" smooth={true} duration={500}   className="block py-2 pl-3 pr-4  rounded  hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}  className="block py-2 pl-3 pr-4  rounded  hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">About</Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}  className="block py-2 pl-3 pr-4  rounded  hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Portfolio</Link>
              </li>

              <li>
                <Link to="contact" smooth={true} duration={500}  className="block py-2 pl-3 pr-4  rounded  hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>

      {/* hidden dropdown menu */}

      <div className={`z-20 min-[769px]:hidden   items-center transition-all duration-500 ease-in-out ${selectedPrimaryColor} fixed  ${navVisible ? "pt-16 opacity-[50%]" : "p-0 opacity-0 "}  w-full `} id="navbar-sticky">
        <ul className=" justify-center flex bg-transparent text-white font-medium ">
          <li>
            <a href="#home" className="block py-2 pl-3 pr-4  rounded hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Home</a>
          </li>
          <li>
            <a href="#about" className="block py-2 pl-3 pr-4  rounded hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">About</a>
          </li>
          <li>
            <a href="#portfolio" className="block py-2 pl-3 pr-4  rounded hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Portfolio</a>
          </li>

          <li>
            <a href="#contact" className="block py-2 pl-3 pr-4  rounded hover:scale-[1.2] transition-all ease-in-out focus-within:scale-[1.2]">Contact</a>
          </li>
        </ul>
      </div>

    </header>
  )
}
