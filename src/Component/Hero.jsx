/* eslint-disable react/prop-types */

import BannerVid from "../assets/video/bannerVideoMinify.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Import the external CSS file

const Hero = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <div className="textDiv">
        <h2>Unleash Your Style,</h2>
        <h2>Wear Your Story,</h2>
        <h2>Embrace the Culture.</h2>
        <p>
          Welcome to Tattoo Adda, where your skin tells your story. Our talented
          artists bring your ideas to life, blending tradition with modern
          artistry to create tattoos that are as unique as you are. At Tattoo
          Adda. Let us help you wear your passion proudly.
        </p>
      </div>
      <div className="mainDiv">
        <Slider {...settings} className="hero-slider">
          <div>
            <video
              src={BannerVid}
              loop
              muted
              playsInline
              autoPlay
              preload="auto"
              poster="/path/to/poster-image.jpg"
              className="hero-video"
              loading="lazy"
            />
          </div>
          <div>
            <video
              src={BannerVid}
              loop
              muted
              playsInline
              preload="auto"
              poster="/path/to/poster-image.jpg"
              className="hero-video"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
