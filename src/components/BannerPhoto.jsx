import React from "react";

import bannerPhoto from "../images/flawb-wide.jpeg";

const BannerPhoto = () => (
  <div className="container-fluid p-0 overflow-hidden">
    <div className="row p-0">
      <div className="BannerPhoto p-0">
        <img src={bannerPhoto} alt={"Adam and Fabiana"}></img>
      </div>
    </div>
  </div>
);

export default BannerPhoto;
