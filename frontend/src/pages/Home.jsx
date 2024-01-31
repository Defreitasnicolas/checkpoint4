import imgHome1 from "../../public/imgHome1.jpg";
import imgHome2 from "../../public/imgHome2.jpg";
import imgHome3 from "../../public/imgHome3.jpg";
import imgHome4 from "../../public/imgHome4.jpg";
import imgHome5 from "../../public/imgHome5.jpg";
import imgHome6 from "../../public/imgHome6.jpg";
import imgHome7 from "../../public/imgHome7.jpg";
import imgHome8 from "../../public/imgHome8.jpg";
import imgHome9 from "../../public/imgHome9.jpg";
import imgHome10 from "../../public/imgHome10.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="titleHome">
        Bienvenue chez DarkMoon dans le 18e arrondissement de Paris
      </h1>
      <div className="imageContainer">
        <img className="imgHome" src={imgHome1} alt="" />
        <img className="imgHome" src={imgHome2} alt="" />
        <img className="imgHome" src={imgHome3} alt="" />
        <img className="imgHome" src={imgHome7} alt="" />
        <img className="imgHome" src={imgHome4} alt="" />
        <img className="imgHome" src={imgHome8} alt="" />
        <img className="imgHome" src={imgHome5} alt="" />
        <img className="imgHome" src={imgHome9} alt="" />
        <img className="imgHome" src={imgHome6} alt="" />
        <img className="imgHome" src={imgHome10} alt="" />
      </div>
      <div>
        <h2 className="titleDescriptionShop">
          Une Ambiance Chaleureuse et Accueillante
        </h2>
        <p className="description">
          Chez DarkMoon, nous croyons en plus qu'en la qualité des tatouages.
          Nous croyons en la création d'une expérience chaleureuse et
          accueillante pour nos clients. Notre ambiance décontractée et
          conviviale vous mettra à l'aise dès que vous franchirez nos portes.
          Nous sommes impatients de partager notre passion avec vous et de
          transformer vos idées en tatouages uniques et significatifs.
        </p>
      </div>
    </>
  );
}

export default Home;
