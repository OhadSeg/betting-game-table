import { useEffect, useState } from 'react';
import './App.css';
import BettingButtons from "./components/BettingButtons/BettingButtons"
import MainMatch from './components/MainMatch/MainMatch';
import data from './data/games.json';
import pictures from './data/picturesData';

const gamesData = data.games;

const firstGame = gamesData[0];
const homeTeamName = firstGame.homeName;
const awayTeamName = firstGame.awayName;
let homeTeamImg;
let awayTeamImg;

pictures.map((picture)=>{
  if(picture.id === homeTeamName){
    homeTeamImg = picture.photo;
  }
  else if(picture.id === awayTeamName){
    awayTeamImg = picture.photo;
  }
})
const gameData = {data:firstGame, homeImg:homeTeamImg, awayImg:awayTeamImg};

function App() {
  const [currGameNumber, setCurrGameNumber] = useState(0);
  const [currGameData, setCurrGameData] = useState(gameData);

  // useEffect(()=> {
  
  //     setCurrGameData(gameData); 
  //     console.log(gameData);
  // },[]);

  return (
    <div className="App">
      <MainMatch info={currGameData} />
      <div className='button-section'>
      <BettingButtons bettingStats={currGameData.data} />

      </div>
    </div>
  );
}

export default App;
