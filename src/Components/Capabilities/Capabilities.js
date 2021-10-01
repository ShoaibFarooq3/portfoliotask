import React from 'react'
import './Capabilities.css'

const WebDesign = ["images/ia_100000030.png", "images/ia_100000030.png", "images/ia_100000030.png",
    "images/ia_100000030.png", "images/ia_100000030.png", "images/ia_100000030.png"];

const Capabilities = () => {
    return (
        <div className="Capabilities-wrap">
            <div className="capa-text-wrap">
                <h1 className="head-wrap">My Capabilities</h1><br /> <br /><br />
                <p className="para-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim <br />veniam, quis nostrud exercitation.</p>
            </div>
           
                <div className="web-main-wrap">
                <div className="container">
                <div className="img-map-wrap">
                    {
                        WebDesign?.map((value) => {
                            return (
                                // <div className="img-map-wrap">
                                    <div className="web-wrap">
                                        <div className="web-wrap-img">
                                            <img src={value} alt="web img"></img>
                                        </div>
                                        <div className="web-wrap-text">
                                            <h2>Web Design</h2>
                                            <p>Get awesome design services <br />from inkyy.com </p>
                                        </div>
                                    </div>
                                // </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capabilities
