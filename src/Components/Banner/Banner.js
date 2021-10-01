import React from 'react'
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="Main-wrapper">
            <div className="text-area">
                <div><h1>About Me</h1></div>
                <div>
                    <p className="text-banner-wrap"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor .
                        incididunt ut labore et lore magna aliqua. <br /><br /> 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.  <br /> <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    
                </div> 
                <div className="btn-bottom">
                <button className="get-btn">Download CV</button>
                </div> 
                </div>

            <div>
                <img src="./images/Layer 0.jpg" alt="layer" className="port-img-2" />
            </div>
            </div>

        </div>
    )
}

export default Banner
