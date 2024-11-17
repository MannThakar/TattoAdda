import React, { useState, useEffect, useRef } from "react";

const HorizontalMarquee = ({ text }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollerRef.current.scrollWidth;
    const animate = () => {
      setScrollPosition((prevPosition) => {
        if (prevPosition <= -scrollWidth) {
          return 0;
        }
        return prevPosition - 1;
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="scroller-container">
      <div
        className="scroller-text"
        ref={scrollerRef}
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {text}
        <span className="spacer"></span>
        {text}
      </div>
    </div>
  );
};

export default HorizontalMarquee;
