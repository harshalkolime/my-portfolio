import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useModalContext } from './context/Modal-context';

export default function Modal({ }) {
  const { showModal } = useModalContext();
  const { showModalHandler } = useModalContext();
  const { setselectedPrimaryColor } = useModalContext();
  const { setSelectedBgColor } = useModalContext();





  return (
    <Fragment>
      {showModal && ReactDOM.createPortal(
        <>

          <article className='fixed h-[full] items-center flex justify-center  z-40 bg-transparent  top-0  ' >

            <div onClick={showModalHandler} className=' flex bg-transparent  h-[100vh]  backdrop-blur-[5px] w-[100vw] z-20 '></div>

            <div className=' fixed z-50 text-center bg-gray-50 shadow-inner rounded-3xl flex flex-col justify-evenly items-center h-[26rem] w-[24rem] '>
              <h1 className='font-bold text-3xl'>Customize Your Theme</h1>
              <p className='text-sm p-5'>Change the primary and background color to your preference.</p>

              <div className=' font-bold flex flex-col w-full justify-evenly'>
                <h1>Choose a primary color </h1>
                <div className=' flex justify-evenly p-5 w-full'>

                  <div onClick={() => setselectedPrimaryColor("bg-[#191919]")} className="color1 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-[#191919]"></div>
                  <div onClick={() => setselectedPrimaryColor("bg-blue-800")} className="color2 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-blue-500"></div>
                  <div onClick={() => setselectedPrimaryColor("bg-lime-300")} className="color3 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-lime-300"></div>
                  <div onClick={() => setselectedPrimaryColor("bg-yellow-300")} className="color4 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-yellow-300"></div>
                  <div onClick={() => setselectedPrimaryColor("bg-red-500")} className="color5 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-red-500"></div>
                  <div onClick={() => setselectedPrimaryColor("bg-pink-400")} className="color6 h-7 w-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] rounded-[50%] bg-pink-300"></div></div>


              </div>

              <div className='font-bold flex flex-col justify-evenly'>
                <h1>Choose Background Color </h1>
                <div className='flex  gap-16 p-5'>
                  <div  onClick={() => setSelectedBgColor("bg-white")}  className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] w-16 h-8 bg-white shadow-xl border-[2px] border-solid '></div>
                  <div  onClick={() => setSelectedBgColor("bg-black")} className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.2] w-16 h-8 bg-black shadow-xl border-[2px] border-solid  '></div>


                </div>


              </div>
            </div>
          </article>

        </>,
        document.querySelector('#overlays')
      )}
    </Fragment>
  );
}
