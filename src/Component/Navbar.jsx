import logo from "../assets/Img/logo.svg";
import {
  PencilRuler,
  House,
  MessageCircleQuestion,
  FolderHeart,
  Info,
} from "lucide-react";
const Navbar = () => {
  return (
    <>
      <header className="navbar1">
        <div className="logo">
          <img src={logo} alt="" className="logoImg" />
        </div>
        <div className="ctnbtn">
          <button className="btn">Get in Touch</button>
        </div>
      </header>

      <header className="navbar">
        <nav className="header">
          <ul className="navbarList">
            <li>
              <House className="navIcons" />
              Home
            </li>
            <li>
              <FolderHeart className="navIcons" />
              Work
            </li>
            <li>
              <PencilRuler className="navIcons" />
              Services
            </li>
            <li>
              <MessageCircleQuestion className="navIcons" />
              FAQs
            </li>
            <li>
              <FolderHeart className="navIcons" />
              Artist
            </li>
            <li>
              <Info className="navIcons" />
              About
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
