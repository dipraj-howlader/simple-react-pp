import React, { useState, useEffect } from 'react';
import FinalTeam from '../FinalTeam/FinalTeam';
import Players from '../Players/Players';
import './PlayerSelection.css'
import fakeData from '../../fakeData/data.json';
import {Row , Col } from 'react-bootstrap';

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
        <div>
            <Row>
    <Col sm={8}><div className='player-style'>
                {
                    players.map(player  => <Players handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Players>)
                }
                
            </div></Col>
    <Col sm={4}><div>
                <FinalTeam finalPlayers={finalPlayers}></FinalTeam>
            </div></Col>
  </Row>




            

            
           
        </div>
    );
};

export default PlayerSelection;