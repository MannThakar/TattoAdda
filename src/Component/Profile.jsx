import { useState, useRef, useEffect } from "react";
import { profiles } from "../Config/Data";
import Insta from "../assets/Img/instagram.svg";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollerRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    const maxScroll =
      scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;
    setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleScroll(200);
      } else if (event.key === "ArrowLeft") {
        handleScroll(-200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPosition]);

  useEffect(() => {
    scrollerRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <>
      <div className="Artists">
        <h1 className="artistNames">Our Artists</h1>
      </div>
      <div className="horizontal-profile-scroller" ref={scrollerRef}>
        {profiles?.map((profile, index) => (
          <div
            key={index}
            className="profile-card"
            onClick={() => navigate(`/profile/${profile.id}`)}
          >
            <div>
              <img src={profile.photo} alt={profile.name} />
            </div>
            <div className="profileAbout">
              <h2>{profile.description}</h2>
              <p>{profile.name}</p>
              <div className="profileButtons">
                <button>Portfolio</button>
                <img
                  src={Insta}
                  alt="Instagram Icon"
                  style={{
                    height: "50px",
                    width: "50px",
                    marginBottom: "-28px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
