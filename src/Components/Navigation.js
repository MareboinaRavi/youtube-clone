import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="d">
      <HomeIcon className="thisicon home" />
      <span className="span home">Home</span>
      <ExploreIcon className="thisicon" /> <span className="span">Explore</span>
      <SubscriptionsIcon className="thisicon" />
      <span className="span">Subcriptions</span>
      <VideoLibraryIcon className="thisicon" />
      <span className="span">Library</span>
      <br />
      <hr />
    </div>
  );
};

export default Navigation;
