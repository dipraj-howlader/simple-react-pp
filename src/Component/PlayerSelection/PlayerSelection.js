import React, { useState, useEffect } from 'react';
import FinalTeam from '../FinalTeam/FinalTeam';
import Players from '../Players/Players';
import './PlayerSelection.css'
import fakeData from '../../fakeData/data.json'

const PlayerSelection = () => {

   const [players, setPlayers] = useState([]);

   useEffect(
    ()=> {
      fetch('https://api.mocki.io/v1/d698ef67')
      .then(res => res.json())
      .then(data=> setPlayers(data))
    }, [] 
    )



    return (
        <div style={{display:'flex'}} >
            <div className='player-style'>
                {
                    players.map(player  => <Players player={player}></Players>)
                }
                
            </div>

            <div>
                <FinalTeam></FinalTeam>
            </div>
            
        </div>
    );
};

export default PlayerSelection;