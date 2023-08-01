import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'



const ModalContext = createContext();


export default function ModalProvider({ children }) {



  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => { setShowModal(!showModal) }

  const [selectedPrimaryColor, setselectedPrimaryColor] = useState( JSON.parse(window.localStorage.getItem("Pritheme")) || "bg-[#191919]" ); 

  const [selectedBgColor, setSelectedBgColor] = useState(JSON.parse(window.localStorage.getItem("bgtheme")) || "bg-black"); 


  //saving values to local storage
  useEffect(() => {
    localStorage.setItem("Pritheme", JSON.stringify(selectedPrimaryColor));
    localStorage.setItem("bgtheme", JSON.stringify(selectedBgColor));

  }, [selectedPrimaryColor, selectedBgColor]);





  return (

    <ModalContext.Provider value={{ showModal, showModalHandler, selectedPrimaryColor, selectedBgColor, setselectedPrimaryColor, setSelectedBgColor }}>{children}</ModalContext.Provider>

  )
}


//custom hook to consume the modal anywhere in our project

export const useModalContext = () => {

  return useContext(ModalContext);


}



