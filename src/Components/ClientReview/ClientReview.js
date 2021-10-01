import React from 'react'
import '../ClientReview/ClientReview.css'

const ClientReview = () => {
    return (
        <div className="main-client-review">
            <div className="client-text-wrap">
                <h1 className="head-clnt">What My Client Says</h1><br />
                <p className="para-clnt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et t enim ad minim <br /> veniam, quis nostrud exercitation.
                </p>
            </div>
            <div className="client-review-panel">
                <div className="client-review-imgs">
                    <div className="position-img">
                        <div>
                            <img src="./images/3.png" className="img-clnt" />
                        </div>
                        <div>
                            <img src="./images/1.png" className="img-clnt" />
                        </div>
                        <div>
                            <img src="./images/22.png" className="img-clnt" />
                        </div>
                        <div>
                            <img src="./images/3.png" className="img-clnt" />
                        </div>
                        <div>
                            <img src="./images/1.png" className="img-clnt" />
                        </div>
                        <div>
                            <img src="./images/22.png" className="img-clnt" />
                        </div>
                    </div>
                </div>
                <div className="client-review-text">
                    <p className="clnt-para-wrap">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br /> accusantium
                        doloremque laudantium,totam rem aperiam, eaque <br /> ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae
                        vitae <br />dicta sunt is the most explicabo.
                        <br /><br /><br /><br /><br /><br /><br />
                        - Sara Smith <br />CEO ABC Company
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ClientReview
