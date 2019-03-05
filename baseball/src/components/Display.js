import React from 'react'

const Display = (props) => {
  const { stats } = props;
  return (
    <div>
      <h2>Balls: {stats.balls}</h2>
      <h2>Strikes: {stats.strikes}</h2>
    </div>
  )
}

export default Display
