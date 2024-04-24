import React, { useState } from "react";
import { ReactFloatingBalloons } from "react-floating-balloons";
import "./BirthdaySurprise.css";
import happyBirthdayWav from "../assets/audio/Happy Birthday.wav";
import happyBirthdayRemix from "../assets/audio/Aer0naught - Happy Birthday! (8-Bit Remix).mp3";
import dancingDolphin from "../assets/images/Dancing Dolphin Gif.gif";
import dancingBear from "../assets/images/wish_bear_dancing_the_fortnite_floss_dance_emote_by_giromcalica_dctxi0u.gif";

function BirthdaySurprise() {
  const audioFiles = [happyBirthdayWav, happyBirthdayRemix];
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleEnded = () => {
    setCurrentTrack((currentTrack + 1) % audioFiles.length);
  };

  return (
    <div>
      <h1>Happy Birthday, Matt!</h1>
      <h2>from: Biscayne Cohort</h2>

      <div className="container">
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="bear" src={dancingBear} alt="Dancing Bear" />
        <img className="bear" src={dancingBear} alt="Dancing Bear" />
        <img className="bear" src={dancingBear} alt="Dancing Bear" />
        <img className="bear" src={dancingBear} alt="Dancing Bear" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
        <img className="dolphin" src={dancingDolphin} alt="Dancing Dolphin" />
       
      </div>
      <audio
        controls
        src={audioFiles[currentTrack]}
        autoPlay
        onEnded={handleEnded}
      />
      <ReactFloatingBalloons
        count={10}
        msgText="Happy Birthday"
        colors={["yellow", "green", "blue", "red", "orange", "purple"]}
        popVolumeLevel={0.1}
        loop="true"
      />
    </div>
  );
}

export default BirthdaySurprise;
