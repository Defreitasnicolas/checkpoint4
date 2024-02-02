import "./Map.css";

function Map() {
  return (
    <div className="mapContainer">
      <iframe
        title="map of shop"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.995244274816!2d2.330485976893349!3d48.89642779802846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e562f3085ad%3A0xd3ed45cc36b0fea0!2sDARK%20MOON%20(%202GY)!5e0!3m2!1sfr!2sfr!4v1700407709399!5m2!1sfr!2sfr"
        style={{
          width: "100%",
          height: "600px",
          border: "solid 1px lightgray",
          allowFullScreen: "",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
        }}
      />
    </div>
  );
}

export default Map;
