import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Gifts = () => (
  <div id="Gifts">
    <div className="container py-3">
      <div className="row">
        <div className="col">
          <h1>Gifts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faHeart} size="3x" />
          <p>
            {"As our wedding day draws near,"}
            <br />
            {"We hope our sentiment is clear."}
            <br />
            {"We need you there as we are wed"}
            <br />
            {"To witness our love as vows are said."}
          </p>
          <p>
            {"But as for gifts, please don't try,"}
            <br />
            {"To find the ideal thing to buy."}
            <br />
            {"Instead a place to call our own,"}
            <br />
            {"Would bring us more joy than we've ever known."}
          </p>
          <p>
            {"So if a gift is on your mind,"}
            <br />
            {"A contribution would be kind."}
            <br />
            {"It will help us more than words can say,"}
            <br />
            {"To celebrate our special day."}
          </p>
          <p>{"Thank you"}</p>
          <FontAwesomeIcon icon={faHeart} size="3x" />
        </div>
      </div>
    </div>
  </div>
);

export default Gifts;
