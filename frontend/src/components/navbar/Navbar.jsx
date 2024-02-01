import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../public/darkMoon.jpg";

function Navbar() {
  return (
    <div className="navbarDesktop">
      <Link to="/" className="link">
        ACCUEIL
      </Link>
      <Link to="/equipe" className="link">
        EQUIPE
      </Link>
      <img className="logo" src={logo} alt="" width={100} />
      <Link to="/projets" className="link">
        PROJETS
      </Link>
      <Link to="/contact" className="link">
        CONTACT
      </Link>
    </div>
  );
}

export default Navbar;
