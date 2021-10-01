import React from 'react'
import '../About/About.css'

const About = () => {
    return (
        <div className="container">
            <div className="main-wrapper">
                <div className="text-wrap">
                    <p className="p-head">Hello I'm</p>
                    <img src="./images/Ellipse 1.png" alt="grey"  className="img-grey"/>
                    <h1 className="h1-text">Mark<br></br>
                        Reccardo</h1>
                    <p className="p2-head">A young <span className="span-text-color"> UI/UX  </span>designer with crazy for mobile & web design.</p><br /><br /><br />
                    <p className="p3-head">Find me on</p>
                    <div className="find-imgs">
                        <img src="./images/behance.png" alt="behance" />
                        <img src="./images/dribbble.png" alt="behance" />
                        <img src="./images/linked in.png" alt="behance" />
                        <img src="./images/insta.png" alt="behance" />
                        <img src="./images/pinterest.png" alt="behance" /><br /><br />
                    </div>
                    <div className="button-head">
                        <button className="btn-style-about">Hire Me</button>
                        <button className="btn-style-about">Portfolio</button>
                    </div>
                </div>
                <div className="image-head">
                    <img src="./images/Layer-4.jpg" alt="Head-img" />
                </div>
                
            </div>
        </div>

    )
}

export default About
