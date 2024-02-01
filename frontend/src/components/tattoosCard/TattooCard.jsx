import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import "./TattooCard.css";

function TattooCard() {
  const [tattooCard, setTattooCard] = useState([]);
  const tattooCardData = async () => {
    try {
      const res = await connexion.get("/tattoos");
      setTattooCard(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    tattooCardData();
  }, []);

  return (
    <div className="galleryCardContainer">
      {tattooCard &&
        tattooCard.map((e) => (
          <div className="card" key={e.image}>
            <div>
              <img className="galleryImage" src={e.image} alt="" />
            </div>
            <div>
              <p>{e.artist}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TattooCard;
