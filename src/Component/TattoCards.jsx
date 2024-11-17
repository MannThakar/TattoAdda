/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
const TattoCards = ({ children }) => {
  const [heading1, heading2, imageElement, videoElement] =
    React.Children.toArray(children);

  const secRightRef = useRef(null);

  useEffect(() => {
    const section = secRightRef.current;

    const handleMouseEnter = () => {
      if (section) {
        const video = section.querySelector("video");
        if (video) {
          video.play();
          video.style.opacity = 1;
          video.controls = false;
          video.preload = "auto";
        }
      }
    };

    const handleMouseLeave = () => {
      if (section) {
        const video = section.querySelector("video");
        if (video) {
          video.style.opacity = 0;
          video.pause();
          video.currentTime = 0; // Optionally reset to the start
        }
      }
    };

    if (section) {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="section">
      <div className="sec-left">
        {/* Directly rendering children, which are React elements */}
        <p>{heading1.props.children}</p>
        <h2>{heading2.props.children}</h2>
        <button className="tattoCardButton">See Designs</button>
      </div>
      {/* Attach ref to this div */}
      <div className="sec-right" ref={secRightRef}>
        {imageElement}
        {videoElement}
      </div>
    </div>
  );
};

export default React.memo(TattoCards);
