import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./test.css"



const data = [
  {
    name: `John Morgan`,
    img: "/images/students/John_Morgan.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: "/images/students/Ellie_Anderson.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: "/images/students/Nia_Adebayo.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: "/images/students/Rigo_Louie.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: "/images/students/Mia_Williams.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `John Morgan(copy)`,
    img: "/images/students/John_Morgan(copy).png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson(copy)`,
    img: "/images/students/Ellie_Anderson.png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo(copy)`,
    img: "/images/students/Nia_Adebayo(copy).png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie(copy)`,
    img: "/images/students/Rigo_Louie(copy).png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams(copy)`,
    img: "/images/students/Mia_Williams(copy).png",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }
  
];


function TestSlide(){
    return (
        <div className='winners'>
        <Slider {...settings}>
          {data.map((winner)=>{
            return (
            
            <div key={winner.name} className='winner'>
              <div className='cardImage'>
                <img src={winner.img} alt="img" className='imageone'/>
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 500,
    

  };

export default TestSlide;