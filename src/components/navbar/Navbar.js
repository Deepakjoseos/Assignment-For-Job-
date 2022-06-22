import { useRef } from 'react';
import {FaBars,FaTimes,FaHome, FaInfo,FaFacebookMessenger} from 'react-icons/fa';
import './navbar.css';
import Logo from './EyeROV-logo.png'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className='logo'>
            <img src={Logo}/>
            <h3><span>E</span>yeROV <span>V</span>isualization <span>a</span>nd <span>A</span>nalytics <span>P</span>latform</h3>
            </div>    
         <nav ref={navRef}>
                <a href="#"><FaHome />Home</a>
                <a href="#"><FaInfo />About</a>
                <a href="#"><FaFacebookMessenger />Support</a>
            
             
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                 <FaTimes />
                </button>
             </nav>
             <button className='nav-btn' onClick={showNavbar}>
                 <FaBars />
                 </button>         
        </header>
        
    );
}

export default Navbar;