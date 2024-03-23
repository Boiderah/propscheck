import React from 'react'
import players from '../players'
import Player from '../Player'

const Playerlist = () => {
  return (
    <div>
        {
            players.map((indplayer, index)=>(
              <Player key={index} name={indplayer.name} imgUrl={indplayer.imageUrl} team={indplayer.team} nationality={indplayer.name}/>
            ))
        }
    </div>
  )
}

export default Playerlist