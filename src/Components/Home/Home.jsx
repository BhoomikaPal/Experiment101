import React from 'react'
import './home.css'
import video from '../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video.mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Our packages
          </span>

          <h1 className="homeTitle">
            Best Performer
          </h1>

        </div>
        <div className="cardDiv grid"></div>
        <div className="plantLocationInput"></div>
        <label htmlFor="city">Select the plant location</label>
        <div className="input flex">
          <input type="text" placeholder='Enter name here...'/>
          <GrLocation className="icon"/>
        </div>
        <div className="datInput"></div>
        <label htmlFor="date">Search your date:</label>
        <div className="input flex">
          <input type="date" placeholder='Enter name here...'/>
          <GrLocation className="icon"/>
        </div>
        
      </div>
    </section>
  )
}

export default Home