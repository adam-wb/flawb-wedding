import React from 'react';

import Map from './Map'
import * as locations from '../helpers/locations';
import VenuePhoto from './VenuePhoto';

import swintonPath from '../images/swinton.jpg';
import churchPath from '../images/church.png';

const Venue = () => {
    const ceremony = locations.ST_ANDREWS;
    const reception = locations.SWINTON;
    
    return (
        <div className="Venue">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <h1>Ceremony - St Andrew's Church</h1>
                            <div className="col">
                                <p>The ceremony will take place at the church in Fabiana's home village.</p>
                                <p>{ceremony.address}</p>
                            </div>
                            <div className="col">
                                <VenuePhoto alt="Photo of St.Andrew's Church" path={churchPath}></VenuePhoto>
                            </div>
                        </div>
                        <div className="row">
                            <h1>Reception - Swinton Park Hotel</h1>
                            <div className="col">
                                <p>The reception takes place at Swinton Park, just outside the market town of Masham.</p>
                                <p>{reception.address}</p>
                            </div>
                            <div className="col">
                                <VenuePhoto alt="Photo of Swinton Estate" path={swintonPath}></VenuePhoto>
                            </div>
                        </div>
                        <div className="row">
                            <h1>Tap a pin for directions</h1>
                            <Map pins={[ceremony, reception]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venue;