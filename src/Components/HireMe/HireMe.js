import React from 'react'
import '../HireMe/HireMe.css'

const HireMe = () => {
    return (
        <div className="Hire-me-wrap">
            <div className="main-heading">
                <h1 className="hire-heading-wrap">Let’s Make Something <br />Great Together</h1>
                <p className="hire-heading-wrap2">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt <br /> ut labore et t enim ad
                    minim veniam, quis nostrud exercitation.</p> <br /><br /><br />
            </div>
            <div className="hire-form-wrap">
                <div className="hire-form-wrap-text">
                    <div >
                        <input type="text" placeholder="Name" className="txt-box-hire" />
                    </div>
                    <div >
                        <input type="text" placeholder="E-mail" className="txt-box-hire" />
                    </div>
                </div>
                <div className="hire-form-wrap-text">
                    <div >
                        <input type="text" placeholder="Phone #" className="txt-box-hire" />
                    </div>
                    <div >
                        <input type="text" placeholder="Budget" className="txt-box-hire" />
                    </div>
                </div>
                <div>
                    <textarea className="hire-textarea" rows={12} cols={98} />
                </div>
                <div>
                    <button className="btn-style">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default HireMe
