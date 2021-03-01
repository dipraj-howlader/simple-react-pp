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

    const [finalPlayers, setFinalPlayers] = useState([])

    const handleAddPlayer = (player) =>{
        const newPlayer = [...finalPlayers, player];
        setFinalPlayers(newPlayer);
    }


    return (
        <div style={{display:'flex'}} >
            <div className='player-style'>
                {
                    players.map(player  => <Players handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Players>)
                }
                
            </div>

            <div>
                <FinalTeam finalPlayers={finalPlayers}></FinalTeam>
            </div>
            
        </div>
    );
};

export default PlayerSelection;