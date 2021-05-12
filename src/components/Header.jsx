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
                    strings={['Ruby on Rails','React.js', 'Node.js']}
                    typeSpeed={70}
                    backSpeed={80} 
                    loop                  
                   />
               </div>
               </div> 
        </div>
    )
}

export default Header;
