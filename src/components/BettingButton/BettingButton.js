import React from "react";
import "./BettingButton.css";

function BettingButton(props) {
  return (
    <button className="betting-button">
        <span>{props.team}</span>
        <span>{props.odds}</span>
    </button>
  );
}

export default BettingButton;
