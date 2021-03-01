import './App.css';
import PlayerSelection from './Component/PlayerSelection/PlayerSelection';

function App() {
  return (
    <div>
      <header><h1 style={{margin:'20px'}}>Player Selection for my Club - <span style={{backgroundColor:'lightblue', borderRadius:'20px', padding:'5px'}}>'Dipraj's Akadhosh'</span></h1></header>
      <PlayerSelection></PlayerSelection>
       </div>
      
  )
}

export default App;
