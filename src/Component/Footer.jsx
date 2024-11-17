import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__social-links">
            <Link to="#" className="footer__social-link">
              Instagram
            </Link>
            <Link to="#" className="footer__social-link">
              Behance
            </Link>
            <Link to="#" className="footer__social-link">
              Dribbble
            </Link>
            <Link to="#" className="footer__social-link">
              Vimeo
            </Link>
            <Link to="#" className="footer__social-link">
              Youtube
            </Link>
            <Link to="#" className="footer__social-link">
              LinkedIn
            </Link>
            <Link to="#" className="footer__social-link">
              Savee.it
            </Link>
            <Link to="#" className="footer__social-link">
              Fonts in Use
            </Link>
            <Link to="#" className="footer__social-link">
              Pinterest
            </Link>
          </div>

          <hr className="footer__divider" />

          <div className="footer__content">
            <p className="footer__slogan">Small is beautiful.</p>
            <div className="footer__links">
              <Link to="#" className="footer__link">
                Index
              </Link>
              <Link to="#" className="footer__link">
                Impressum
              </Link>
              <Link to="#" className="footer__link">
                Privacy Policy
              </Link>
              <span className="footer__copyright">
                © Size – All rights reserved.
              </span>
            </div>
          </div>

          <div className="footer__logo">
            <h2 className="footer__logo-text">Footer</h2>
            <span className="footer__logo-trademark">®</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
