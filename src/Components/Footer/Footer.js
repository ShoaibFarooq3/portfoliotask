import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer-main-wrap">
            <div className="footer-class-wrap">
                <div className="footer-header">
                    <img src="./images/Portfolio-footer.png" alt="header img" />
                </div>
                <div className="footer-contact-text">
                    <p>About  |  Portfolio  |  Contact</p><br />
                    <p>MB / +92 333590 0657 / Shoaib.studio.com</p><br /><br /><br />
                </div>
                <div className="footer-img-bottom">
                    <img src="./images/Group.png" />
                </div>
                <div className="footer-line-hr">
                    <br /><br /> <hr />
                </div>
                <div className="footer-copyright">
                    <br /><br /> <p className="footer-copyright">Copyright © 2019 Shoaib Studio | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
