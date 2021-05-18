import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div>
           <div className="header-wrapper">
               <div className="main-info">
                   <h1>I work with such technologies as:</h1>
                   <Typed 
                    className='typed-text'
                    strings={['Ruby on Rails','React.js', 'Node.js', 'Docker', 'Kubernetes', 'SASS', 'Javascript ES6', 'Linux(Ubuntu/Mint)']}
                    typeSpeed={30}
                    backSpeed={60}  
                    loop                  
                   />
                   <a href='#' className ='btn-main-offer'> Contact me</a>
               </div>
               </div> 
        </div>
    )
}

export default Header;
