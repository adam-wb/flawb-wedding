import React from 'react';
import { AIRBNB_SEARCH, TRIP_ADVISOR_SEARCH, VISIT_MASHAM_ACCOMODATION } from '../helpers/links';

const Accomodation = () => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Accomodation</h1>
                <h2>Swinton</h2>
                <p>We have secured exclusive use of the beautiful Swinton Park Hotel for the day of the reception, 
                    as a result it is possible to book a room at Swinton for the night of the 4th June through us should you wish.
                    Each room at Swinton will cost £150; this also includes breakfast the next morning.
                </p>
                <h2>Hotels</h2>
                <a href={TRIP_ADVISOR_SEARCH}>TripAdvisor</a>
                <p>Alternatively, we reccommend one of a number of hotels around Masham and the surrounding area.
                    There are a few hotels in Masham itself, but accomodation in places like Bedale or Ripon would also give just a short drive to the venue.
                    You can find more accomodation that might not be on places like TripAdvisor on the <a href={VISIT_MASHAM_ACCOMODATION}>Visit Masham</a> site.
                </p>
                <h2>AirBnB</h2>
                <a href={AIRBNB_SEARCH}>AirBnB</a>
                <p>There are numerous AirBnB properties around Masham, often in very nice old houses.</p>
            </div>
        </div>
    </div>
)

export default Accomodation;