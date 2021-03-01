import React from 'react';
import Button from "react-bootstrap/Button";
import '../../Component/assets/css/bootstrap.min.css';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Players = (props) => {
    const handleAddPlayer =props.handleAddPlayer;
    const {name , salary, photo, id, email} = props.player;
    return (
        <div className='players'>
            <img src={photo} alt=""/>
            <h3>{name}</h3>
            <p><small>Email : {email}</small></p>
            <p>Salary : ${salary}</p>
            <Button variant="warning" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faAngleDoubleRight} /> Add {name}</Button>{' '}
        </div>
    );
};

export default Players;