import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import Bar from "../../Sidebar/Sidebar";
import "./Home.css";
import piano from "./piano.jpg";
const Home = () => {
  return (
    <div>
      <Card
        title="Focus"
        image={piano}
        playlistName="Peaceful Piano"
        description="Relax and indulge with beautiful piano pieces"
      />
      <Link>Show All</Link>
    </div>
  );
};
export default Home;
