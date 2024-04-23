import "./navbar.scss";
import { LuLayoutDashboard, LuBoxSelect } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiGearSixBold } from "react-icons/pi";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <LuLayoutDashboard />
        <p>Admin</p>
      </div>
      <div className="icons">
        <FaSearch />
        <RxDashboard />
        <LuBoxSelect />
        <div className="notification">
          <MdOutlineNotificationsActive />
          {/* <span className="count">1</span> */}
        </div>
        <div className="profile">
          <div className="avatar">
            <img
              alt="profile"
              src={
                "https://images.unsplash.com/photo-1504376379689-8d54347b26c6?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <p>Mwema</p>
        </div>
        <PiGearSixBold />
      </div>
    </div>
  );
};
