import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({name, team, nationality, number, imgUrl, age}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
            <img src={imgUrl} alt=""/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{team}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Text>{nationality}</Card.Text>
        <Card.Text>jersey: {number}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player