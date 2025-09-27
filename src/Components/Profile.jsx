import React, { useState } from 'react'
import rhysand from '../assets/rhysand.jpg'
import Likes from './Likes'

const Profile = () => {
  const [hearts, setHearts] = useState(0)

  const addHeart = () => setHearts(h => h + 1)

  return (
    <div>
    <Likes hearts={hearts} />
      <h2>Rhysand</h2>
      <img src={rhysand} alt="Rhysand" onClick={addHeart} style={{cursor: 'pointer'}} />
      <h3>RhysandtheGreat</h3>
      <p>“High Lord of the Night Court. Lover of stars, freedom, and one very stubborn High Lady.”</p>
    </div>
  )
}

export default Profile
