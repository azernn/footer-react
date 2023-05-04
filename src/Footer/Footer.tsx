import "./Footer.css";
import logo from "../assets/images/Logo (1).png";
import fb from "../assets/images/fb.png";
import tw from "../assets/images/tw.png";
import IN from "../assets/images/in.png";
import insta from "../assets/images/insta.png";
export const Footer = () => {
  return (
    <footer>
      <div className="main-interno">
        <div className="interno">
          <div className="sub-content">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>Interno</p>
            </div>
            <p className="text">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
          </div>
          <div className="icons">
            <button>
              <img src={fb} alt="fb" />
            </button>
            <button>
              <img src={tw} alt="tw" />
            </button>
            <button>
              <img src={IN} alt="in" />
            </button>
            <button>
              <img src={insta} alt="insta" />
            </button>
          </div>
        </div>
        <div className="main-pages">
          <p>Pages</p>
          <div className="pages">
            <a href="#">About us</a>
            <a href="#">Our Projects</a>
            <a href="#">Our Team</a>
            <a href="#">Contact us </a>
            <a href="#">Services</a>
          </div>
        </div>
        <div className="service"></div>
        <div className="contact"></div>
      </div>
      <div className="copyright"></div>
    </footer>
  );
};
