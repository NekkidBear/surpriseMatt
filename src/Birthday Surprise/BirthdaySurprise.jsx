import React from "react";
import { ReactFloatingBalloons } from "react-floating-balloons";
import "./BirthdaySurprise.css";
import { Spotify } from "react-spotify-embed";

function BirthdaySurprise() {
  return (
    <div>
      <Spotify wide link="https://open.spotify.com/playlist/2a3U47HXjEiaI5YA3LrUXf?si=50b7f21c3f144b1c" />
      <img
        src="../assets/images/wish_bear_dancing_the_fortnite_floss_dance_emote_by_giromcalica_dctxi0u.gif"
        alt="Wish Bear dancing the 'Floss' dance from Fortnite."
      />
      <h1>Happy Birthday!</h1>
      <ReactFloatingBalloons
        count={38}
        msgText="Happy Birthday!"
        colors={["yellow", "green", "blue", "red", "orange", "purple"]}
        popVolumeLevel={0.1}
        loop="true"
        hangOnTop="true"
      />
    </div>
  );
}

export default BirthdaySurprise;
