import React from 'react'

// Presentational component: receives a number and renders that many hearts
const Likes = ({ hearts = 1 }) => {
  const heartsString = '❤️'.repeat(Math.max(0, hearts))
  return (
    <div className="hearts">
      <p>{heartsString}</p>
    </div>
  )
}

export default Likes
