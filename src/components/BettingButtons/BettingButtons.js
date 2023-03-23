import React from "react";
import "./BettingButtons.css";
import BettingButton from "../BettingButton/BettingButton";

function BettingButtons(props) {
  return (
    <div className="betting-buttons-container">
      <BettingButton team={props.bettingStats.homeName} odds={props.bettingStats.homeOdds} swapGame={props.swapGame} currGameNumber={props.currGameNumber}/>
      <div className="betting-buttons-margin" />
      <BettingButton team="Empate" odds={props.bettingStats.drawOdds} swapGame={props.swapGame} currGameNumber={props.currGameNumber} />
      <div className="betting-buttons-margin" />
      <BettingButton team={props.bettingStats.awayName} odds={props.bettingStats.awayOdds} swapGame={props.swapGame} currGameNumber={props.currGameNumber} />
    </div>
  );
}

export default BettingButtons;
