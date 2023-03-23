import { useEffect, useState } from 'react';
import './App.css';
import BettingButtons from "./components/BettingButtons/BettingButtons"
import MainMatch from './components/MainMatch/MainMatch';
import data from './data/games.json';
import pictures from './data/picturesData';

const gamesData = data.games;

const getGameDataByID = (index) =>{
  const firstGame = gamesData[index];
  const homeTeamName = firstGame.homeName;
  const awayTeamName = firstGame.awayName;
  let homeTeamImg;
  let awayTeamImg;
  
  pictures.forEach((picture)=>{
    if(picture.id === homeTeamName){
      homeTeamImg = picture.photo;
    }
    else if(picture.id === awayTeamName){
      awayTeamImg = picture.photo;
    }
  })
  const gameData = {data:firstGame, homeImg:homeTeamImg, awayImg:awayTeamImg};
  
  return gameData;
} 

function App() {

  const [currGameNumber, setCurrGameNumber] = useState(0);
  const [currGameData, setCurrGameData] = useState(getGameDataByID(0));

  useEffect(()=> {
    setCurrGameData(getGameDataByID(currGameNumber));
    //add to localStorage 
  },[currGameNumber]);

  return (
    <div className="App">
      <MainMatch info={currGameData} />
      <div className='button-section'>
      <BettingButtons bettingStats={currGameData.data} swapGame={setCurrGameNumber} currGameNumber={currGameNumber}/>

      </div>
    </div>
  );
}

export default App;
