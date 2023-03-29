import React from "react";
import { Link } from "react-router-dom";
import SearchService from "../../Services/SearchService";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <SearchService />
    </div>
  );
};
export default Home;
