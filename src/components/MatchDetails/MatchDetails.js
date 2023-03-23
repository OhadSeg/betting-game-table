import React from "react";
import "./MatchDetails.css";

function MatchDetails(props) {  
    return (
      <div className="main">
      <h1>{props.homeTeamName}</h1>
      <h1 style={{color:"green"}}>VS</h1>
      <h1>{props.awayTeamName}</h1>
      </div>
    );
  }
  
  export default MatchDetails;