import React from "react";

const VenuePhoto = ({ alt, path }) => (
  <div className="VenuePhoto">
    <img src={path} alt={alt}></img>
  </div>
);

export default VenuePhoto;
