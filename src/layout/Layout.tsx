import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import { Menu } from "../components/menu/menu";
import { NavBar } from "../components/navbar/navbar";
import "./layout.scss";

export const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
