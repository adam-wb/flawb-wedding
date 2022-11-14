import React from 'react';
import Countdown from './Countdown';
import { CARRIAGES, CEREMONY, EVENING_RECEPTION, MORNING_BREAKFAST, MORNING_BREAKFAST_END } from '../helpers/schedule'

const Home = () => (
    <div className="Home">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Countdown to the ceremony</h1>
                    <Countdown date={CEREMONY}/>
                    <p>We would be honoured if you could join us both to share our special day with us. 
                        We hope this site will help answer any questions about you have about the day in advance.</p>
                    <h2>The day: {CEREMONY.toDateString()}</h2>
                    <p>Ceremony: {CEREMONY.toTimeString()}</p>
                    <p>Evening Reception: {EVENING_RECEPTION.toTimeString()} - {CARRIAGES.toTimeString()}</p>
                    <h2>The morning after: {MORNING_BREAKFAST.toDateString()}</h2>
                    <p>For those staying at Swinton, please join us for:</p>
                    <p>Breakfast: {MORNING_BREAKFAST.toTimeString()} - {MORNING_BREAKFAST_END.toTimeString()}</p>
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