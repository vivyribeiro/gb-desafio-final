import React, { useState } from 'react';
import './header.css';
import LogoHeader from '../assets/logo-corebiz-white.svg'
import { FiMenu, FiX } from "react-icons/fi";

export default function HeaderSection(){

    const [showMenu, setShowMenu] = useState(true);
    
    return(
        
        <header className="section-header">
            <nav className="container-header">
                <a  href="/" id="home">
                    <img src={LogoHeader} className="logo-header" alt="logo" />
                </a>
                <div >
                    <ul className="desktop-links"  id={showMenu ? "hidden" : "show"}>
                        <li><a href="https://www.corebiz.ag/pt/about/" target="_blank" 
                        rel="noreferrer noopener">a corebiz</a></li>
                        <li><a href="https://www.corebiz.ag/pt/#framework-title" target="_blank" 
                        rel="noreferrer noopener">serviços</a></li>     
                        <li><a href="https://www.corebiz.ag/pt/cases/" target="_blank" 
                        rel="noreferrer noopener">cases</a></li>    
                        <li><a href="https://www.corebiz.ag/pt/contato/" target="_blank" 
                        rel="noreferrer noopener">contato</a></li>
                    </ul>
                    <button className="toggle-menu" onClick={() => setShowMenu (!showMenu)}>
                        {showMenu ? < FiMenu /> : < FiX/>}
                    </button>
                </div>          
            </nav>
        </header>
    )
}