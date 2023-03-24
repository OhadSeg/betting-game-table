import React from 'react';
import './MainMatch.css';
import MatchDetails from '../MatchDetails/MatchDetails';

const MainMatch = (props) =>{
  return (
    <div className="container">
      <img className="logo-image" src={props.info.homeImg} alt="homeTeam" />
      <MatchDetails homeTeamName={props.info.data.homeName} awayTeamName={props.info.data.awayName} />
      <img className="logo-image" src={props.info.awayImg} alt="awayTeam" />
    </div>
  );
}

export default MainMatch;
