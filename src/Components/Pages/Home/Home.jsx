import React from "react";
import { Link } from "react-router-dom";
import SearchService from "../../Services/SearchService";
import TrackDatafromBackend from "../../Services/TrackDatafromBackend";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <SearchService />
      <TrackDatafromBackend />
    </div>
  );
};
export default Home;
