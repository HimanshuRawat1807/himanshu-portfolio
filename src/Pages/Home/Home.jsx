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
import Resume from '../../Components/Resume';
import Hero from '../../Components/Hero';


const Home = () => {
  return (
    <div id="home">

        {/* <section className="hero">
            <div className="container">
                <div className="row flex">
                    <div className="col w-1/1 border hero-left">
                        <h1>Front-End Developer</h1>
                        <h2>Himanshu Rawat</h2>
                        <p>Frontend developer with 1.5+ years of experience in web and IT operations, now focused on building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Passionate about clean design, code quality, and real-world problem-solving.</p>

                        <div className="hero-btn">
                            <button> Contact Now</button>
                            <button style={{"margin-left":"10px"}}> Download Resume</button>
                        </div>

                        <div className="social-media flex">
                            <li><FaGithub size={20} /></li>
                            <li style={{"margin-left":"5px"}}><FaLinkedin size={20} /></li>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section> */}

        <Hero/>
        {/* <About/> */}
        <Portfolio/>
        <Service/>
        <Testimonials/>
        <Contact/>
        <Resume/>
        

    </div>
  )
}

export default Home