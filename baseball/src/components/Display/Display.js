import React from 'react'

const Display = (props) => {
  // const { stats } = props;
  return (
    <div>
      <h2 data-testid="balls">Balls: {props.stats.balls}</h2>
      <h2 data-testid="strikes">Strikes: {props.stats.strikes}</h2>
    </div>
  )
}

export default Display
