import './header.css';
import LogoHeader from '../assets/logo-corebiz-white.svg'
import { FiMenu, FiX } from "react-icons/fi";

export default function HeaderSection(){
    return(
        <header className="section-header">
            <nav className="container-header">
                <a  href="/" id="home">
                    <img src={LogoHeader} className="logo-header" alt="logo" />
                </a>
                <div>
                    <ul class="desktop-links">
                        <li><a class="title" href="https://www.corebiz.ag/pt/about/" target="_blank" 
                        rel="noreferrer noopener">a corebiz</a></li>
                        <li><a class="title" href="https://www.corebiz.ag/pt/#framework-title" target="_blank" 
                        rel="noreferrer noopener">serviços</a></li>     
                        <li><a class="title" href="https://www.corebiz.ag/pt/cases/" target="_blank" 
                        rel="noreferrer noopener">cases</a></li>    
                        <li><a class="title" href="https://www.corebiz.ag/pt/contato/" target="_blank" 
                        rel="noreferrer noopener">contato</a></li>
                    </ul>
                </div>
                <FiMenu className="toggle icon-menu"/>
                <FiX className="toggle icon-close"/>
            </nav>
        </header>
    )
}