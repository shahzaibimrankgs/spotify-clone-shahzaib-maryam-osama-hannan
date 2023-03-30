import axios from "axios";
import { useDataLayerValue } from "../../DataLayer";
import Card from "../Card/Card";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import "./CommonServices.css";

function CommonServices() {
  const [searchResults, setSearchResults] = useState([]);
  const [{ search }] = useDataLayerValue();
  const [id, setId] = useState(null);

  const createTrack = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/track/createTrack",
        { id: id }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    if (search !== "") {
      const response = await axios.get(
        `https://spotify23.p.rapidapi.com/search/?q=${search}&type=multi`,
        {
          headers: {
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
            "X-RapidAPI-Key":
              "a3ed0e39d5mshac15d804c8cc9e6p1a14fbjsnf9646d9b381b",
          },
        }
      );
      setSearchResults(response.data.tracks.items);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);
  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="search-container">
      <div className="search-results-container">
        {searchResults.map((result) => (
          <div key={result.id}>
            <Card
              image={result.data.albumOfTrack.coverArt.sources[0].url}
              title={result.data.name}
              artist={result.data.artists.items[0].profile.name}
              id={result.data.id}
              onClick={() => handleClick(result.data.id)}
            />
          </div>
        ))}
        <Footer id={id} />
      </div>
    </div>
  );
}

export default CommonServices;
