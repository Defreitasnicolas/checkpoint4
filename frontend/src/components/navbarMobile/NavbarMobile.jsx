import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import logo from "../../../public/darkMoon.jpg";

function NavbarMobile() {
  return (
    <div className="navbarMobile">
      <div className="logoMobileContainer">
        <img className="logo" src={logo} alt="" width={100} />
      </div>
      <div className="linkMobileContainer">
        <Link to="/" className="linkMobile">
          ACCUEIL
        </Link>
        <Link to="/equipe" className="linkMobile">
          EQUIPE
        </Link>
        <Link to="/projets" className="linkMobile">
          PROJETS
        </Link>
        <Link to="/contact" className="linkMobile">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default NavbarMobile;
