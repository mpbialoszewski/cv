import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faGem, faTools } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
  return (
    <div>
      <div className="services">
        <h1 className="py-5">Stack</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                <h3>Web Design</h3>
                <p>Placeholder WDS</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faJs} size="2x" /></div>

                <h3>Web Development</h3>
                <p>Placeholder WDV</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faGem} size="2x" /></div>

                <h3>Software Engineering</h3>
                <p>Placeholder SENG</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faTools} size="2x" /></div>

                <h3>Testing</h3>
                <p>Placehold TST</p>.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
