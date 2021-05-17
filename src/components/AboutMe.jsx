import React from 'react'
import author from '../author.jpeg';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
          </div>        
        <div className="col-lg-6 col-xs-12">
          <h1 className="about-heading">About me!</h1>
          <p>Hi! My name is Mariusz, and I am a young Junior Develop currently seeking a new position
          related to web development. </p>
          <p>I call myself highly organized and efficient individual,
          whose thorough and precise approach to .</p>
          <p>Thanks to that I have yielded excellent results in previous
          employment such as delivering tasks and projects in with success and on schedule.</p> 
          <p> Now I am working on this portfolio and have no idea what else to add :D </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe


