import React from "react";
import "./BettingButtons.css";
import BettingButton from "../BettingButton/BettingButton";

const BettingButtons = ({currGameNumber, swapGame, bettingStats}) => {
  return (
    <div className="betting-buttons-container">
      <BettingButton team={bettingStats.homeName} odds={bettingStats.homeOdds} swapGame={swapGame} currGameNumber={currGameNumber}/>
      <div className="betting-buttons-margin" />
      <BettingButton team="Empate" odds={bettingStats.drawOdds} swapGame={swapGame} currGameNumber={currGameNumber} />
      <div className="betting-buttons-margin" />
      <BettingButton team={bettingStats.awayName} odds={bettingStats.awayOdds} swapGame={swapGame} currGameNumber={currGameNumber} />
    </div>
  );
}

export default BettingButtons;
