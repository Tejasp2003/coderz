import { useState } from "react";
import "../styles/SideBar.css";
import { AiOutlineSetting } from "react-icons/ai";
// import { FaSearch } from "react-icons/fa";
import {
  MdOutlineNotificationsActive,
  MdOutlineEditCalendar,
} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { SlFolderAlt } from "react-icons/sl";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function SideBar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  function checkActiveRoute(route) {
    if (location.pathname === route) {
      return true;
    }
  }

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="logo">
        <h1>Coders</h1>
      </div>
      {/* <div className="wrap__icon">
        <AiOutlineLeft/>
      </div> */}

      <div className="border-line"></div>
      <div className="items">
        {/* <div className="create-post">
          <button className="create-post-btn">
            <IoIosAddCircle /> <span className="create">Create</span>
          </button>
        </div> */}
        {/* <div className="search">
          <FaSearch /> <input type="text" placeholder="Search..." />
        </div> */}
        <div className="items-list">
          <button className={checkActiveRoute("/home")?"active": ""}
            onClick={() => {
              // setIsActive(true)

              navigate("/home");
            }}
            
          >
            <HiOutlineHome className="home-icon" />

            <span>Home</span>
          </button>
          <button
            onClick={() => {
              navigate("/events");
            }}
            className={checkActiveRoute("/events") && "active"}
          >
            <MdOutlineEditCalendar className="events-icon" />{" "}
            <span>Events</span>
          </button>
          <button
            onClick={() => {
              navigate("/notifications");
            }}
            className={checkActiveRoute("/notifications") && "active"}
          >
            <MdOutlineNotificationsActive className="notifications-icon" />{" "}
            <span>Notifications </span>
          </button>
          <button
            onClick={() => {
              navigate("/profile");
            }}
            className={checkActiveRoute("/profile") && "active"}
          >
            <CgProfile className="profile-icon" /> <span> Profile</span>
          </button>
          <button
            onClick={() => {
              navigate("/projects");
            }}
            className={checkActiveRoute("/projects") && "active"}
          >
            <SlFolderAlt className="projects-icon" /> <span>My Project</span>
          </button>
          <button
            onClick={() => {
              navigate("/settings");
            }}
            className={checkActiveRoute("/settings") && "active"}
          >
            <AiOutlineSetting className="settings-icon" /> <span>Settings</span>
          </button>
        </div>
        <div className="logout">
          <button className="logout-btn" onClick={signOutHandler}>
            <BiLogOut className="logout-icon" />{" "}
            <span className="logout-span">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
