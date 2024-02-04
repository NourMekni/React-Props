import React from "react";
import players from "./players";
import Player from "./Player";

const PlayerList=()=>{
    
    
      return (
    <div>

        {/*While mapping through the players pass in the props to the Player component*/ }
        {players.map((player)=>(
            <Player key={player.name}{...player}/>
            ) )};
        
    </div>)
    
}

export default PlayerList;