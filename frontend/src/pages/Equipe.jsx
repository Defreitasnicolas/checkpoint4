import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";
import "./Equipe.css";

function Equipe() {
  const [tattooArtist, setTattooArtist] = useState([]);
  const tattooArtistData = async () => {
    try {
      const res = await connexion.get("/artists");
      setTattooArtist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    tattooArtistData();
  }, []);

  return (
    <div className="cardContainer">
      {tattooArtist &&
        tattooArtist.map((e) => (
          <div className="artistCard" key={e.id}>
            <div className="cardTitle">
              <h2>{e.name}:</h2>
              <h2>{e.speciality}</h2>
            </div>
            <img className="artitsImg" src={e.image} alt="Le tatoueur" />
            <p>{e.biography}</p>
          </div>
        ))}
    </div>
  );
}

export default Equipe;
