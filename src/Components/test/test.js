import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./test.css"

function TestSlide(){
    return (
        <div className='winners'>
        <Slider {...settings}>
          {data.map((winner)=>{
            return (
            
            <div key={winner.name} className='winner'>
              <div className='cardImage'>
                <img src={winner.img} alt="" className='imageone'/>
              </div>
              <div className='winnercontent'>
                <p className='namedept'>{winner.name}</p>
                <p className='dept'>{winner.name}</p>
              </div>
            </div>          
            )
          })}
       </Slider>
      </div>
    )
}

const data = [
    {
      name: `John Morgan`,
      img: `/John_Morgan.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `/Ellie_Anderson.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `/Nia_Adebayo.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `/Rigo_Louie.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: "/Mia_Williams.png",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `John Morgan(copy)`,
      img: `/John_Morgan(copy).png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson(copy)`,
      img: `/Ellie_Anderson.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo(copy)`,
      img: `/Nia_Adebayo(copy).png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie(copy)`,
      img: `/Rigo_Louie(copy).png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams(copy)`,
      img: `/Mia_Williams(copy).png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 500,
    

  };

export default TestSlide;