import './App.css';
import desktop from "./assets/desktop.png";
import BettingButtons from "./components/BettingButtons/BettingButtons"
import MainMatch from './components/MainMatch/MainMatch';

function App() {
  return (
    <div className="App">
      <MainMatch/>
      <div className='button-section'>
        <BettingButtons/>

      </div>
    </div>
  );
}

export default App;
