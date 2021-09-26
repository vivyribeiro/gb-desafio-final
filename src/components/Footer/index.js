// import React from 'react';
import './footer.css';
import LogoFooter from '../assets/logo-corebiz-black.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection(){
    return(
        <footer className="section-footer">
            <div className="footer-left">
                <div className="copyright">
                    <a href="#home" > 
                        <img src={LogoFooter} className="logo-footer" alt="logo"/>
                    </a>
                    <p>direitos reservados, corebiz 2021</p>
                    <div className="social-links">
                        <a href="https://pt-br.facebook.com/corebiz.ag/" target="_blank" 
                        rel="noreferrer noopener"> 
                            <FaFacebookF />
                        </a> 
                        <a href="https://www.instagram.com/corebizag/" target="_blank" 
                        rel="noreferrer noopener">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/corebiz-brasil" target="_blank" 
                        rel="noreferrer noopener">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <ul className="menu-links">
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
            <div className="footer-right">
                <div className="location">
                    <h2 className="title"><span>.</span>Brasil</h2>
                    <p className="subtitle">Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p className="subtitle">R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </div>
                <div className="location">
                    <h2 className="title"><span>.</span>Argentina</h2>
                    <p className="subtitle">Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>
                <div className="location">
                    <h2 className="title"><span>.</span>México</h2>
                    <p className="subtitle">Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </div>
                <div className="location">
                    <h2 className="title"><span>.</span>Chile</h2>
                    <p className="subtitle">Roberto del Río 1137, Providencia.</p>
                </div>
            </div>
        </footer>
    )
}