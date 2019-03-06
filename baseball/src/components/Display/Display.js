import React from 'react'

const Display = (props) => {
  // const { stats } = props;
  return (
    <div>
      {/* <h2 data-testid="balls">Balls: {props.stats.balls}</h2>
      <h2 data-testid="strikes">Strikes: {props.stats.strikes}</h2> */}
      <h2 data-testid="balls">{props.stats.balls}</h2>
      <h2 data-testid="strikes">{props.stats.strikes}</h2>
      {/* <h2 >Strikes: <span data-testid="strikes">{props.stats.strikes}</span></h2> */}
    </div>
  )
}

export default Display
