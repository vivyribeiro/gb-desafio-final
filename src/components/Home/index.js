import React, { useEffect, useState }from 'react';
import './home.css';
import {  FaChevronCircleRight  } from "react-icons/fa";

export default function HomeSection(){
    const [index, setIndex] = useState(0);

    const Data = async () =>{
        await fetch('https://my-json-server.typicode.com/vivyribeiro/my-fakeapi/Images');
    }

    return(
        <div className="section-home">
            <div className="left-content">
                <h1 className="imgs-title">TITÚLO DA IMAGEM</h1>
                <a className="cta-link" href="https://www.corebiz.ag/pt/about/" target="_blank" 
                    rel="noreferrer noopener">
                    <span >veja mais  </span>
                    <FaChevronCircleRight />
                </a>
            </div>
            <div className="container-thumbnails">
                    <button className="thumbnail-btn">
                        <img src="" alt=""/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt=""/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt=""/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt=""/>
                        
                    </button>
                </div>
            <div className="right-content">
                <div className="current-banner">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}