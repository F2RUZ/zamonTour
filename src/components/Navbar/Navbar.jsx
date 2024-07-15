import "./navbar.scss";
import logo from "../../assets/img/zamon.svg";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShownav] = useState(false);

  const handleNavbar = () => {
    setShownav(!showNav);
  };
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <img src={logo} alt="" className="navbar__logo" />

        <div id={showNav ? "block" : "hodden"} className="navbar__box">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#explore" className="navbar__link">
                About
              </a>
            </li>{" "}
            <li className="navbar__item">
              <a href="#week" className="navbar__link">
                Tours
              </a>
            </li>{" "}
            <li className="navbar__item">
              <a href="#reservation" className="navbar__link">
                Contacts
              </a>
            </li>
          </ul>

          <div  className="navbar__languages">
            <p className="navbar__laguage">Uz</p>
            <p className="navbar__laguage">Eng</p>
            <p className="navbar__laguage">Ru</p>
            <p className="navbar__laguage">
              <i className="fa-brands fa-telegram"></i>
            </p>
            <p className="navbar__laguage">
              <i className="fa-brands fa-square-instagram"></i>
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            handleNavbar();
          }}
          className="navbar__burger"
        >
          <hr className="navbar__hr" />
          <hr className="navbar__hr" />
          <hr className="navbar__hr" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
