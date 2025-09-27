import React from 'react'
import Profile from './Profile'

const interests = [
    "High Lord of the Night Court (the most powerful of the seven courts, in case you were wondering).",
    "Devoted mate and equal to Feyre Archeron, High Lady of the Night Court.",
    "Protector of Velaris, the City of Starlight.",
    "Occasional schemer, frequent flirt, always dramatic.",
    "Interests: Flying under the stars, strategy (political and chess), family dinners with the Inner Circle, and tormenting Cassian."
]

const Dashboard = () => {
  return (
    <div>
      <Profile />
      <h3>About Moi!</h3>
        <ul>
            {interests.map((interest, index)=>(<li key = {index}>{interest}</li>))}
        </ul>
    </div>
  )
}

export default Dashboard
