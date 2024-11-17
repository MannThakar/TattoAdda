// Import necessary modules and assets
import React from "react";
import TattoCards from "./TattoCards";
import serviceImg from "../assets/Img/serviceImage1.png";
import tattoVideo1 from "../assets/video/tattoVideo1.mp4";
import tattoImage2 from "../assets/Img/tattoImage2.jpg";

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="serviceText">
          <h2 className="serviceHeading">
            Let's craft your masterpiece together
          </h2>
          <button className="serviceButtoned">Book Appointment</button>
        </div>
        <div className="serviceMain">
          <div className="serviceBox1">
            <h2>
              Get{" "}
              <span className="realistic-marker-highlight">
                Personalised Offer *{" "}
              </span>
              on the table
            </h2>
            <button className="serviceButton">Check Offers</button>
          </div>
          <div className="serviceBox2">
            <h2>The Tattoo Offer You've Always Wanted</h2>
            <p>
              Rewards come to those who make good choices. Thank you for
              visiting this page—now choose the offer that suits you perfectly!
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* Passing video and other elements as children */}
        <TattoCards>
          <h2>20+ flash tattoos for you, Choose any from this and get it in</h2>
          <h2>Offer Price Rs 500/-</h2>
          <img src={serviceImg} alt="Tattoo Service" />
          <video
            src={tattoVideo1}
            controls
            loop
            playsInline
            preload="auto"
            loading="lazy"
          >
            Your browser does not support the video tag.
          </video>
        </TattoCards>

        <TattoCards>
          <h1>200+ Big tattoos for you, Choose any from this and get it in</h1>
          <h2>Offer Price Rs 14,XXX/-</h2>
          <img src={tattoImage2} alt="Tattoo Service" />
          <video src={tattoVideo1} controls loop>
            Your browser does not support the video tag.
          </video>
        </TattoCards>
      </div>
    </>
  );
};

export default Service;
