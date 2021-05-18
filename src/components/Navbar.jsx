import React from "react"
//ReactFontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: 'var(--cvOrange)'}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={false} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="about" className="nav-link" href="#">about me </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="services" className="nav-link" href="#">Stack</Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="experience" className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="projects" className="nav-link" href="#">Projects</Link>
            </li>
            
          </ul>

        </div>
          </div>
        </nav>
      </>
    
    )
}

export default Navbar;
