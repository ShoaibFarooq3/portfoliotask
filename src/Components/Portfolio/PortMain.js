import React from 'react'
import './Portfolio.css'
import Tabs from './Tabs'

const PortMain = () => {
  return (
    <div>
      <Tabs>
        <div label="All">
          <div className="port-heading-img">
            <img src="./images/ia_100000007.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000015.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000023.png" alt="heading image" className="img-head"></img>
          </div>
          <div className="port-heading-img">
            <img src="./images/ia_100000019.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000021.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000017.png" alt="heading image" className="img-head"></img>
          </div>
        </div>
        <div label="Logo">
          <div className="port-heading-img">
            <img src="./images/ia_100000007.png" alt="heading image" className="img-head"></img>
          </div>
        </div>
        <div label="Websites">
          <div className="port-heading-img">
            <img src="./images/ia_100000017.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000021.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000023.png" alt="heading image" className="img-head"></img>
          </div>
        </div>
        <div label="Mobile Apps">
          <div className="port-heading-img">
            <img src="./images/ia_100000015.png" alt="heading image" className="img-head"></img>
            <img src="./images/ia_100000023.png" alt="heading image" className="img-head"></img>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default PortMain
