import React from 'react'
import './home.css'
import video from '../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestSlide from '../test/test'



const Home = () => {
// creating a react hook to add a scroll animation


  return (
    <div>
    <video src={video} muted autoPlay loop type="video.mp4"></video>
    <TestSlide/>
    <section className='home'>            
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
    </div>
  )
}

const data = [
  {
    name: `John Morgan`,
    img: `./../photo/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `./../photo/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `./../photo/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `./../photo/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `./../photo/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `John Morgan(copy)`,
    img: `./../photo/John_Morgan(copy).jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson(copy)`,
    img: `./../photo/Ellie_Anderson.jpg(copy)`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo(copy)`,
    img: `./../photo/Nia_Adebayo(copy).jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie(copy)`,
    img: `./../photo/Rigo_Louie(copy).jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams(copy)`,
    img: `./../photo/Mia_Williams.jpg(copy)`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};


export default Home