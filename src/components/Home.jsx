import React from 'react';
import Countdown from './Countdown';

const weddingCeremony = new Date("06/04/2023, 13:30");
const weddingDrinksReception = new Date("06/04/2023, 14:30");
const weddingBreakfast = new Date("06/04/2023, 15:30");
const weddingEveningReception = new Date("06/04/2023, 19:30");
const breakfast = new Date("06/05/2023, 7:30");

const Home = () => (
    <div className="Home">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Countdown to the ceremony</h1>
                    <Countdown date={weddingCeremony}/>
                    <p>We would be honoured if you could join us both to share our special day with us. 
                        We hope this site will help answer any questions about you have about the day in advance.</p>
                    <h2>Schedule</h2>
                    <h3>{weddingCeremony.toDateString()}</h3>
                    <p>Ceremony: {weddingCeremony.toTimeString()}</p>
                    <p>Drinks Reception: {weddingDrinksReception.toTimeString()}</p>
                    <p>Wedding Breakfast: {weddingBreakfast.toTimeString()}</p>
                    <p>Evening Reception: {weddingEveningReception.toTimeString()}</p>
                    <p></p>
                    <h3>{breakfast.toDateString()}</h3>
                    <p>Breakfast: {breakfast.toTimeString()}</p>
                    <h2>Gifts</h2>
                    <p>We have been fortunate enough to live together for some time now, 
                        and as a result would love any contribution towards a housing deposit, 
                        to help us kickstart our married life in a house we can truly call our own.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Home;