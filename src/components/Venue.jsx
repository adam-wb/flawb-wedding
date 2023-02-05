import React from "react";

import Map from "./Map";
import * as locations from "../helpers/locations";
import VenuePhoto from "./VenuePhoto";

import swintonPath from "../images/swinton.jpg";
import churchPath from "../images/church.jpg";

const Venue = () => {
  const ceremony = locations.ST_ANDREWS;
  const reception = locations.SWINTON;

  return (
    <div id="Venue">
      <div className="container py-3">
        <div className="row p-2">
          <div className="col">
            <h1>{"Venue"}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row py-2">
              <h2>{"Ceremony - St Andrew's Church"}</h2>
              <div className="col">
                <VenuePhoto
                  alt="Photo of St.Andrew's Church"
                  path={churchPath}
                ></VenuePhoto>
              </div>
              <div className="col">
                <p>
                  {
                    "The ceremony will take place at the church in Fabiana's home village."
                  }
                </p>
                <p>
                  {
                    "There is no designated parking for the church, please park anywhere on the main street of the village (it's free)."
                  }
                </p>
                <p>{ceremony.address}</p>
              </div>
            </div>
            <div className="row py-2">
              <h2>Reception - Swinton Park Hotel</h2>
              <div className="col">
                <p>
                  {
                    "The reception takes place at Swinton Park, just outside the market town of Masham."
                  }
                </p>
                <p>
                  {
                    "There is ample parking at Swinton, and cars can be left overnight and collected the next morning."
                  }
                </p>
                <p>
                  {"More info about Swinton can be found"}
                  <a href="https://www.swintonestate.com/hotel/">{"here"}</a>.
                </p>
                <p>{reception.address}</p>
              </div>
              <div className="col">
                <VenuePhoto
                  alt="Photo of Swinton Estate"
                  path={swintonPath}
                ></VenuePhoto>
              </div>
            </div>
            <div className="row">
              <h2>{"Tap a pin for direction"}s</h2>
              <Map pins={[ceremony, reception]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
