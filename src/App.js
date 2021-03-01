import './App.css';
import PlayerSelection from './Component/PlayerSelection/PlayerSelection';

function App() {
  const headerStyle = {
    margin: '1em 0 0.5em 0',
    color: '#343434',
    fontWeight: 'normal', 
    fontSize: '36px',
    lineHeight: '42px',
    textTransform: 'uppercase',
    textShadow: '0 2px white, 0 3px #777',
    margin:'20px',
    padding:'10px',
    backgroundColor:'lightblue',
    borderRadius:'10px',
    textAlign:'center'
  }
  return (
    <div>
      <header><h1 style={headerStyle}>Player Selection for my Club -'Dipraj's Akadhosh'</h1></header>
      <PlayerSelection></PlayerSelection>
       </div>
      
  )
}

export default App;
