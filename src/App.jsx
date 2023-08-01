import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Archviz from "./components/archviz";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Modal from "./components/Modal";
import ModalProvider from "./components/context/Modal-context";
import initAOS from './components/animation/initaos';
import { useEffect } from "react";

function App() {

  // Call the AOS.init function only once when the application loads
  useEffect(() => {
    initAOS();
    console.log("change")
  }, []);

  return (

    <div >

        <ModalProvider>

          <Header />
          <Home />
          <About />
          <Portfolio />
          <Archviz />
          <Contact />
          <Footer />
          <Modal />

        </ModalProvider>









    </div>


  )
}

export default App;
