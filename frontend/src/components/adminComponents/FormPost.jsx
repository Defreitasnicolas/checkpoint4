import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./FormPost.css";

function Signup() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
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
      await connexion.post("/players", formValue);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="style">
        <p>Style</p>
        <input
          label="Nom d'utilisateur"
          name="username"
          type="text"
          onChange={handleChange}
          value={formValue.username}
          minLength={3}
          maxLength={25}
        />
      </div>
      <div className="image">
        <p>Image</p>
        <input
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formValue.email}
        />
      </div>
      <div className="artist">
        <p>artist_id</p>
        <input
          label="Mot de passe"
          name="password"
          type="password"
          onChange={handleChange}
          value={formValue.password}
          minLength={6}
          maxLength={25}
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

export default Signup;
