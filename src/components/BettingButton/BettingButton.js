import React from 'react';
import { handlePostRequest } from '../../logic';
import './BettingButton.css';

const BettingButton = ({ currGameNumber, swapGame, team, odds }) => {
  const handleClick = () => {
    let nextGameNumber = currGameNumber + 1;
    if (nextGameNumber > 3) {
      swapGame(0);
    } else {
      swapGame(nextGameNumber);
    }
    const res = handlePostRequest('http://localhost:3001/api/bets', team);
    console.log(res);
  };

  return (
    <button className="betting-button" onClick={handleClick}>
      <span>{team}</span>
      <span>+{odds}</span>
    </button>
  );
};

export default BettingButton;
