import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Footer from "../Footer/Footer";
const TrackDatafromBackend = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [ids, setIds] = useState("4686eQ81DEswHa90bcdlC9");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/track/getAllTracks");
      const data = await response.json();
      console.log(data);
      setSearchResults(data);
    };
    fetchData();
  }, []);
  const handleClick = (id) => {
    setIds(id);
  };

  return (
    <div className="card-containeeer">
      {searchResults.map((result) => (
        <div key={result.id}>
          <Card
            image={result.image}
            title={result.name}
            artist={result.artist}
            id={result.preview_url}
            onClick={() => handleClick(result.id)}
          />
        </div>
      ))}
      <Footer id={ids} />
    </div>
  );
};

export default TrackDatafromBackend;
