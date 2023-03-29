import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import SpotifyWebApi from "spotify-web-api-js";
import "./SearchService.css";

const spotify = new SpotifyWebApi(); //connecting spotify to react in order to talk to react(sort of)
const SearchService = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [ids, setIds] = useState("4686eQ81DEswHa90bcdlC9");
  //   setIds("4686eQ81DEswHa90bcdlC9");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/track/getTrack");
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
            setIds={setIds}
          />
          {/* <button onClick={()=>handleClick(result.data.id)}>button</button> */}
        </div>
      ))}
      <Footer spotify={spotify} />
    </div>
  );
};

export default SearchService;
