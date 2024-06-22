import React from "react";
import ArtistCard from "../components/ArtistCard"
import {Link} from "react-router-dom"

function Artists() {
  return (
    <main className="artists-page container">
      <h2 className="artists-title">Artists</h2>
      <p className="artists-txt">Choose one of our artists below to view their photos</p>
      <div className="artists-card-container">
        <Link to="/artists/WillySerdan">
          <ArtistCard />
        </Link>
      </div>
    </main>
  );
}

export default Artists;

/**
 * It would be fine to get more data (artists) in order to reuse my "ArtistCard" component. (future)
 * We can render the "Link" depending of how many artists we have... (future)
 * We can give some props to our "ArtistCard" component like "name" and "image url" (future)
 * */ 