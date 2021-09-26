import React, { useState, useEffect } from 'react';
import './home.css';
import {  FaChevronCircleRight  } from "react-icons/fa";

export default function  HomeSection(){
    const [index, setIndex] = useState(0);

    const [data, setData] = useState([
        { id: " ", title: " ", url: " ", thumbnailUrl: " "},
        { id: " ", title: " ", url: " ", thumbnailUrl: " "},
        { id: " ", title: " ", url: " ", thumbnailUrl: " "},
        { id: " ", title: " ", url: " ", thumbnailUrl: " "},
    ]);

    useEffect(() => {  
        const imgData = async () => {
            const response = await fetch('https://my-json-server.typicode.com/vivyribeiro/my-fakeapi/Images');
            const data = await response.json(); 
       
            setData(data); 
            console.log(data);  
        };  
        imgData();  

    }, []);

        return (
          <div className="section-home">          
            <div className="main-home">
                <div className="left-content">
                    <h1 className="imgs-title">{data[index].title}</h1>
                    <a className="cta-link" href="https://www.corebiz.ag/pt/about/" target="_blank" 
                    rel="noreferrer noopener">
                    <span >veja mais  </span>
                    <FaChevronCircleRight />
                </a>
                </div>
                <div className="container-thumbnails">
                    <button onClick={() => setIndex(0)} className="thumbnail-btn">
                        <img className={index === 0 ? "active " : "inactive"}
                        src={data[0].thumbnailUrl}  alt="miniatura 1"/>
                        
                    </button>
                    <button onClick={() => setIndex(1)} className="thumbnail-btn">
                        <img className={index === 1 ? "active" : "inactive"}
                        src={data[1].thumbnailUrl}  alt="miniatura 2"/>
                        
                    </button>
                    <button onClick={() => setIndex(2)} className="thumbnail-btn">
                        <img className={index === 2 ? "active" : "inactive"}
                        src={data[2].thumbnailUrl}  alt="miniatura 3"/>
                        
                    </button>
                    <button onClick={() => setIndex(3)} className="thumbnail-btn">
                        <img className={index === 3 ? "active" : "inactive"}
                        src={data[3].thumbnailUrl}  alt="miniatura 4"/>
                        
                    </button>
                </div>
                <div className="right-content">
                    <div className="current-banner">
                        <div class="numbertext">{data[index].id} / {data.length}</div>   
                        <img src={data[index].url} alt="banner"/>
                    </div>
                </div>
            </div>
          </div>
        )
}