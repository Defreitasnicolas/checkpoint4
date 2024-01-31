import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarDesktop">
      <Link to="/" className="link">
        ACCEUIL
      </Link>
      <Link to="/equipe" className="link">
        EQUIPE
      </Link>
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
