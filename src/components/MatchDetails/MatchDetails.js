import React from 'react';
import './MatchDetails.css';

function MatchDetails({homeTeamName,awayTeamName}) {
  return (
    <div className="main">
      <h1 style={{ color: 'white' }}>{homeTeamName}</h1>
      <h1 style={{ color: 'green' }}>VS</h1>
      <h1 style={{ color: 'white' }}> {awayTeamName}</h1>
    </div>
  );
}

export default MatchDetails;
