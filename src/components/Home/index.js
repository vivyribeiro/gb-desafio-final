import React, { Component } from 'react';
import './home.css';
import {  FaChevronCircleRight  } from "react-icons/fa";

class  HomeSection extends Component(){
    // const [index, setIndex] = useState(0);

    // const Data = async () =>{
    //     await fetch('https://my-json-server.typicode.com/vivyribeiro/my-fakeapi/Images');
    // }

    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
      }
      componentDidMount() {
        const url = "https://my-json-server.typicode.com/vivyribeiro/my-fakeapi/Images";
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({ Images: json }))
      }
      render() {
        const { Images } = this.state;  
        return (
            {Images.map((Image) => (
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
                        <img src="" alt="miniatura 1"/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt="miniatura 2"/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt="miniatura 3"/>
                        
                    </button>
                    <button className="thumbnail-btn">
                        <img src="" alt="miniatura 4"/>
                        
                    </button>
                </div>
                <div className="right-content">
                    <div className="current-banner">
                    <img src="" alt="banner"/>
                </div>
                </div>
            </div>
            )
            )
            }
         );
      }
}

export default HomeSection;