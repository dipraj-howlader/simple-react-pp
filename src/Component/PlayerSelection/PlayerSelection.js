import React from 'react';
import FinalTeam from '../FinalTeam/FinalTeam';
import Players from '../Players/Players';

const PlayerSelection = () => {
    return (
        <div>
            <div>
            <Players></Players>
            </div>

            <div>
                <FinalTeam></FinalTeam>
            </div>
            
        </div>
    );
};

export default PlayerSelection;