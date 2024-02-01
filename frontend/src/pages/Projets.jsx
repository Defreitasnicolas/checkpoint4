import React from "react";
import PresentationGallery from "../components/gallery/PresentationGallery";
import TattooCard from "../components/tattoosCard/TattooCard";
import EndGallery from "../components/gallery/EndGallery";

function Projets() {
  return (
    <div className="projectContainer">
      <PresentationGallery />
      <TattooCard />
      <EndGallery />
    </div>
  );
}

export default Projets;
