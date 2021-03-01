import React from 'react';
import './FinalTeam.css'

const FinalTeam = (props) => {
    const finalPlayers = props.finalPlayers;
    console.log(finalPlayers);

    let selectedPlayerSalary = finalPlayers.reduce((sum, footballer) => sum + Number(footballer.salary)
    ,0)
    const selectedPlayerName = finalPlayers.reduce((sum , footballerName) => sum + footballerName.name + ' '
    ,[])
    

    return (
        
        <div className='final-team'>
            <h3>Final Team Players</h3>
            <br/>
            <hr></hr>
            <br/>
            <h4>Selected Player : {finalPlayers.length}</h4>
            <br/>
            <h6>Selected Players Name : {selectedPlayerName}</h6>
            <br/>
            <br/>
            <h6>Total Salary : ${selectedPlayerSalary}</h6>

            
        </div>
    );
};

export default FinalTeam;