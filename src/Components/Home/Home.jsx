import React from 'react'
import './home.css'
import video from '../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'



const Home = () => {
// creating a react hook to add a scroll animation


  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video.mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <h1 data-aos="fade-up"
          className="homeTitle">
            Best Performer
          </h1>

        </div>
        <div data-aos="fade-up" className="cardDiv grid">
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
        </div>
        <div className="searchOptions flex">
          <HiFilter className="icon"/>
          <span>MORE PERFORMER</span>
        </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">

          </div>
          <div className="leftIcons">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
