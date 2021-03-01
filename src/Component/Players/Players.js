import React from 'react';
import Button from "react-bootstrap/Button";
import '../../Component/assets/css/bootstrap.min.css';
import './Players.css'

const Players = (props) => {
    console.log(props);
    const {name , salary, photo, id, email} = props.player;
    return (
        <div className='players'>
            <img src={photo} alt=""/>
            <h3>{name}</h3>
            <p><small>Email : {email}</small></p>
            <p>Salary : ${salary}</p>
            <Button variant="warning">Clicked</Button>{' '}
        </div>
    );
};

export default Players;