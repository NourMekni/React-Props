import React from "react";
import { Card } from 'react-bootstrap';

const Player=({name,team,nationality,jerseyNumber,age,imageUrl})=>{

    {/*inline styling for the Player component.*/ }
    const styleObject={color:"red",textAlign:'center'}
    const styleObject2={color:"green",textAlign:'center'}

  return(
    <div >

    {/* The card will display all attributes for each player defined in the players.js*/ }
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} alt={name} />
     <Card.Body>
       <Card.Title style={styleObject}> Name : {name}</Card.Title>
       <Card.Text style={styleObject2}> Team : {team }</Card.Text>
       <Card.Text> Nationality :{nationality } </Card.Text>
       <Card.Text> JerseyNumber : {jerseyNumber } </Card.Text>
       <Card.Text> Age : {age }  </Card.Text>
     </Card.Body>
   </Card>
   </div>
   )}

  {/*default props for each attribute*/ }
  Player.defaultProps={
    tab:{name:"player1",team:"team1",nationality:"nationality1",jerseyNumber:"Number1",age:"30",imageUrl:"imageUrl"}
  }
 export default Player;