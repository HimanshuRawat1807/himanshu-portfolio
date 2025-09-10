import React from 'react';
// import dev-img from "../../assets/developer.png";
// import devimg from "../../assets/developer-new.png";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



// import "./Home.css";
import About from '../../Components/About';
import Portfolio from '../../Components/Portfolio';
import Service from '../../Components/Service';
import Testimonials from '../../Components/Testimonial';
import Contact from '../../Components/Contact';
import Experience from '../../Components/Experience';
import Hero from '../../Components/Hero';
import ToolsSection from '../../Components/ToolsSection';
import PopUpForm from '../../Components/PopUpForm';


const Home = ({toggleModal}) => {
  return (
    <div id="home">

        <Hero toggleModal={toggleModal}/>
        <Portfolio/>
        <ToolsSection/>
        <Service/>
        <About/>
        <Testimonials/>
        {/* <Contact/> */}
    
        <Experience/>
        

    </div>
  )
}

export default Home