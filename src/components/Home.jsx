import React from "react";
import Countdown from "./Countdown";
import { CEREMONY } from "../helpers/schedule";
import BannerPhoto from "./BannerPhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <div id="Home">
    <div className="container py-3">
      <div className="row px-3">
        <div className="col">
          <h1>{"Join us in the countdown until we say 'I do!'"}</h1>
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <Countdown date={CEREMONY} />
        </div>
      </div>
    </div>
    <BannerPhoto />
    <div className="container py-3">
      <div className="row p-3">
        <div className="col">
          <h2>
            {"Welcome to our wedding website! We're so glad you're here."}
          </h2>
        </div>
      </div>
      <div className="row p-3">
        <div className="col">
          <p>
            {
              "We've created this website as a helpful resource for all of the need-to-know details in the lead up to our big day."
            }
          </p>
          <p>
            {
              "Here you'll find our schedule of timings and venue directions, local accommodation options for those travelling, along with our love story."
            }
          </p>
          <p>
            {
              "We'd love for you to take a look around to learn more about our wedding day plans. Don't forget to RSVP and leave us a song request for the dance floor, too!"
            }
          </p>
          <p>
            {
              "And finally, thanks so much for all of your love and support so far! We can't wait to celebrate this special day with all of our favourite people."
            }
          </p>
          <p>{"Lots of love, Adam and Fabiana"}</p>
          <p>{"XOXO"}</p>
          <p>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
