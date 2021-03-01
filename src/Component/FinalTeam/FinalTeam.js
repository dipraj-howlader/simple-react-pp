import React from 'react';
import './FinalTeam.css'

const FinalTeam = (props) => {
    const finalPlayers = props.finalPlayers;

    const selectedPlayerSalary = finalPlayers.reduce((sum, footballer) => sum + Number(footballer.salary)
    ,0)

    // let individulSalary = finalPlayers.map((salary) =>  Number(salary.salary), 0);
    
    
    const selectedPlayerName = finalPlayers.reduce((sum , footballerName , salary) => sum + footballerName.name + '($' + footballerName.salary + '),'
    ,[]);
    

    return (
        
        <div className='final-team'>
            <h3>Final Team Players</h3>
            <br/>
            <hr></hr>
            <br/>
            <h4>Total Selected Player :{finalPlayers.length}</h4>
            <br/>
            <h6>Selected Players Name : <span>{selectedPlayerName}</span></h6>
            <br/>
            <hr></hr>
            <h6>Total Salary : ${selectedPlayerSalary}</h6>

            
        </div>
    );
};

export default FinalTeam;