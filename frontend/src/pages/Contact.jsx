import Map from "../components/map/Map";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <h2 className="titleWhere">Nous Trouver</h2>
      <Map />
      <p>
        3 rue Jean Dolfus <br />
        75018 <br />
        Paris
      </p>
    </div>
  );
}

export default Contact;
