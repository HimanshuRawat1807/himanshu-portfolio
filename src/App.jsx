import './App.css'

// import "./MediaQuery/Media.css"
import Header from './Components/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import Footer from './Components/Footer.jsx'
import PopUpForm from './Components/PopUpForm.jsx'
import { useState } from 'react'
// import HeaderTest from './Components/HeaderTest.jsx'

function App() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
 
  return (
    <>
      <Header/>
      {/* <HeaderTest/> */}
      <Home toggleModal={toggleModal}/>
      <Footer/>
      <PopUpForm isOpen={isOpen} toggleModal={toggleModal}/>
    </>
  )
}

export default App
