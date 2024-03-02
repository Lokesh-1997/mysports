
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/homestyle.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const SliderContents = [
  {
    image: require('../images/slide-1.jpg'),
    title: "WELCOME TO THE My Sports Club",
    content: "Bringing Together   Players at My Sports Club"
  },
  {
    image: require('../images/slide-2.jpg'),
    title: "FEST",
    content: "Our Recent Seminar on   Strategies was a Great Success"
  },
  {
    image: require('../images/slide-3.jpg'),
    title: "UPCOMING TOURNAMENTS",
    content: "Follow Us on Social Media to Learn More About Upcoming Events"
  },
]

function Home() {



  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const slides = [
    {
      id: 1,
      title: 'WEEKLY MEETINGS',
      description: 'Join Us on Mondays and Thursdays from 5.30 to 8.30',
      image: require('../images/slide-1.jpg'),
    },
    {
      id: 2,
      title: 'MEET OUR TEAM',
      description: 'Learn More About our 2024 Team Members',
      image: require('../images/slide-2.jpg'),
    },
    {
      id: 3,
      title: 'FAQ PAGE',
      description: 'Get Answers to Frequently Asked Questions',
      image: require('../images/slide-3.jpg'),
    },
  ];

  return (
    <>
      <div className="caro-main">
        <Slider {...settings}>
          {SliderContents.map((data, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={data.image} alt={data.title} />
              <div className="content-overlay">
                {/* Your content goes here */}
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="main-card">
        <div className="row-contents">
          {slides.map((slide) => (
            <div key={slide.id} className="col-contents">
              <div className="custom-card">
                <div className="image-container">
                  <NavLink to="/page">
                    <img
                      className="custom-card-img"
                      src={slide.image}
                      alt={`Slide ${slide.id} Image`}
                    />
                  </NavLink>
                </div>
                <div className="custom-card-body">
                  <h5 className="custom-card-title">{slide.title}</h5>
                  <p className="custom-card-description">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Home;
