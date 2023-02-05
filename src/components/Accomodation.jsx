import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  AIRBNB_SEARCH,
  TRIP_ADVISOR_SEARCH,
  VISIT_MASHAM_ACCOMODATION,
  YORKSHIRE_ESCAPES,
} from "../helpers/links";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faBinoculars,
  faHouseUser,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Accomodation = () => (
  <div id="accomodation">
    <div className="container py-3">
      <div className="row">
        <div className="col">
          <h1>{"Accomodation"}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Swinton</h2>
          <p>
            {
              "We have secured exclusive use of the beautiful Swinton Park Hotel for the day of the reception, as a result it is possible to book a room at Swinton for the night of the 4th June through us should you wish. Each room at Swinton will cost £150; this also includes breakfast the next morning. Please let us know ASAP if you are interested in booking a room."
            }
          </p>
          <p>{"Check-in will be from 4pm, check-out is at 11am."}</p>
          <h2>{"Hotels"}</h2>
          <p>
            {
              "Alternatively, we reccommend one of a number of hotels around Masham and the surrounding area. There are a few hotels in Masham itself, but accomodation in places like Bedale or Ripon would also give just a short drive to the venue. You can find more accomodation that might not be on places like TripAdvisor on the Visit Masham site. There are also numerous AirBnB properties around Masham, often in very nice old houses. We've added some helpful links below to various websites for accomodation."
            }
          </p>
          <div id="accomodationLinks">
            <p>
              <FontAwesomeIcon icon={faBinoculars} />{" "}
              <a href={TRIP_ADVISOR_SEARCH}>{"TripAdvisor"}</a>
              <FontAwesomeIcon icon={faAirbnb} />
              <a href={AIRBNB_SEARCH}>{"AirBnB"}</a>
              <FontAwesomeIcon icon={faHouseUser} />
              <a href={VISIT_MASHAM_ACCOMODATION}>{"Visit Masham"}</a>
              <FontAwesomeIcon icon={faImage} />
              <a href={YORKSHIRE_ESCAPES}>{"Yorkshire Escapes"}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Accomodation;
