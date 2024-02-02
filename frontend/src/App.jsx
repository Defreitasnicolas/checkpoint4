import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
    </>
  );
}

export default App;
