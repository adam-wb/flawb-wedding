import React from 'react';

import Map from './Map'

const Venue = () => (
    <div className="Venue">
        <div className="container">
            <div className="row">
                <h1>Venues</h1>
                <Map />
            </div>
            <div className="col">

            </div>
            <div className="col">
                
            </div>
            <div className="row">
                <h2>Ceremony - St Andrew's Church</h2>
                <p>The ceremony will take place at the church in Fabiana's home village.</p>
            </div>
            <div className="row">
                <h2>Reception - Swinton Park Hotel</h2>
                <p>The reception takes place at Swinton Park, just outside Masham.</p>
            </div>
        </div>
    </div>
)

export default Venue;