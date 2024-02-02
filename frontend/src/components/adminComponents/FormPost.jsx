import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./FormPost.css";

function FormPost() {
  const [formValue, setFormValue] = useState({
    style: "",
    image: "",
    artist_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/tattoos", formValue);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="style">
        <p>Style</p>
        <input
          label="style"
          name="style"
          type="text"
          onChange={handleChange}
          value={formValue.style}
        />
      </div>
      <div className="image">
        <p>Image</p>
        <input
          label="image"
          name="image"
          type="text"
          onChange={handleChange}
          value={formValue.image}
        />
      </div>
      <div className="artist">
        <p>artist_id</p>
        <input
          label="Mot de passe"
          name="artist_id"
          type="text"
          onChange={handleChange}
          value={formValue.artist_id}
        />
      </div>
      <div className="buttonPost">
        <button className="inputPost" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}

export default FormPost;
