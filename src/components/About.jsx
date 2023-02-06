import React from "react";
import VenuePhoto from "./VenuePhoto";

import oldPath from "../images/old-collage.jpeg";
import proposalPath from "../images/engagement-collage.jpeg";

const About = () => (
  <div id="About">
    <div className="container py-3">
      <div className="row p-3">
        <div className="col">
          <h1>{"About Us"}</h1>
        </div>
      </div>
      <div className="row p-3">
        <div className="col">
          <h2>{"How We Met"}</h2>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md">
          <p>
            {
              "We followed the classic fairytale of meeting at University. However, it took us multiple drunken nights together alone before we could finally muster up the courage to admit that our two year friendship would work much better as a love story."
            }
          </p>
          <p>
            {
              "After all, everyone wants to fall in love with their best friend."
            }
          </p>
          <p>
            {
              "At first, we went on a Starbucks date (date zero as we like to call it) to tell each other our unspoken truth about our feelings and to organise our first proper date. It had to be something we both loved to do, and that was our love for dogs, so we decided to go to the Dog 'n' Scone dog cafe. We decided to date in secret until we knew that it was right for us."
            }
          </p>
          <p>
            {
              "A couple of months later, we were moving down south for our placement years, Adam in Winchester and Fabiana in Cirencester for a year of work and travelling backwards and forwards to see each other every weekend, carefully navigating the transition between friendship and relationship. Once back at university for our final year, we ended up moving in together for lockdown, fortunately we survived, certain we were in it for the long haul."
            }
          </p>
        </div>
        <div className="col-md">
          <VenuePhoto
            path={oldPath}
            alt="collage of Adam and Fabiana during their university days"
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="col">
          <h2>{"The Proposal"}</h2>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md">
          <p>
            {
              "We had just gotten the keys to our first home together. After months apart, it was the eve of our two year anniversary. With rose petals, tea lights and balloons to spell it out in case I couldn't, I got down on one knee to ask the most important question of my life. One I already knew the answer to, but one word has never brought me so much happiness."
            }
          </p>
          <p>{"In that moment, our lives were perfect."}</p>
        </div>
        <div className="col-md">
          <VenuePhoto
            path={proposalPath}
            alt="collage of Adam's set up for proposing"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
