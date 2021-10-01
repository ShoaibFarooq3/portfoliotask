import React from 'react'
import '../Portfolio/Portfolio.css'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import PortMain from './PortMain';

const Portfolio = () => {
    return (
        <div className="Main-wrapper-portfolio">
            <div className="main-head">
               <div> <h1>Portfolio</h1></div>
               <div className="icon-wrap">
               <div className="icon-bdr" > <FaArrowLeft /></div>
              <div  className="icon-bdr" >  <FaArrowRight/> </div>
              </div>
            </div>
            <PortMain />
        </div>
    )
}

export default Portfolio
