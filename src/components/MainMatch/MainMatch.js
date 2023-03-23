import React from "react";
import "./MainMatch.css";
import MatchDetails from "../MatchDetails/MatchDetails";

function MainMatch(props) {
  return (
    <div className="container">
      <div className="img-container1">
        <img src={props.info.homeImg} alt="homeTeam" />
      </div>
      <MatchDetails homeTeamName={props.info.data.homeName} awayTeamName={props.info.data.awayName} />
      <div className="img-container2">
        <img src={props.info.awayImg} alt="awayTeam" />
      </div>
    </div>
  );
}

export default MainMatch;
