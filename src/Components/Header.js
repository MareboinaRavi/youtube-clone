import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
const Header = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="main">
      <div className="icon">
        <MenuIcon className="ham" style={{ cursor: "pointer" }} />
        <img
          style={{ cursor: "pointer" }}
          className="image"
          src="./img.PNG"
          alt="youube icon"
        />
      </div>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="searchicon" />
      </div>
      <div className="last">
        <VideoCallIcon style={{ cursor: "pointer", margin: "0px 5px" }} />
        <AppsIcon style={{ cursor: "pointer" }} />
        <NotificationsIcon style={{ cursor: "pointer" }} />
        <div className="user">
          <h1 className="letter" style={{ cursor: "pointer" }}>
            💻
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
