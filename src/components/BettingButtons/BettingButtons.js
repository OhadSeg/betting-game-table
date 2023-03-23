import React from "react";
import "./BettingButtons.css";
import BettingButton from "../BettingButton/BettingButton";

function BettingButtons() {
  return (
    <div className="betting-buttons-container">
      <BettingButton text="Small bet" />
      <div className="betting-buttons-margin" />
      <BettingButton text="Medium bet" />
      <div className="betting-buttons-margin" />
      <BettingButton text="Large bet" />
    </div>
  );
}

export default BettingButtons;
