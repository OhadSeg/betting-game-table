import React from "react";
import "./BettingButton.css";

function BettingButton(props) {
  return (
    <button className="betting-button">{props.text}</button>
  );
}

export default BettingButton;
