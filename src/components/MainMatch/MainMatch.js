import React from "react";
import "./MainMatch.css";
import homeTeam from "../../assets/america.png";
import awayTeam from "../../assets/atlas.png";
import MatchDetails from "../MatchDetails/MatchDetails";

function MainMatch() {
  return (
    <div className="container">
      <div className="img-container1">
        <img src={homeTeam} alt="homeTeam" />
      </div>
      <MatchDetails />
      <div className="img-container2">
        <img src={awayTeam} alt="awayTeam" />
      </div>
    </div>
  );
}

export default MainMatch;
