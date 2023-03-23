import React from "react";
import "./BettingButton.css";


function BettingButton(props) {
    
    function handleClick(){
        let nextGameNumber = props.currGameNumber + 1;
        if(nextGameNumber > 3){
            props.swapGame(0);
        }
        else{
            props.swapGame(nextGameNumber);
        }
    }  

  return (
    <button className="betting-button" onClick={handleClick}>
        <span>{props.team}</span>
        <span>{props.odds}</span>
    </button>
  );
}

export default BettingButton;
