import React, { useEffect, useState } from 'react'
import rhysand from '../assets/rhysand.jpg'

function Profile (){
  const [hearts, setHearts] = useState(0);

  useEffect(()=>{
   
  },[hearts]);

  return (
    <div>
      <div>{"❤️".repeat(Math.max(0, hearts))}</div>
      <h2>Rhysand</h2>
      <img src={rhysand} alt="Rhysand" onClick={()=> setHearts(hearts + 1)} style={{cursor: 'pointer'}} />
      <h3>RhysandtheGreat</h3>
      <p>“High Lord of the Night Court. Lover of stars, freedom, and one very stubborn High Lady.”</p>
    </div>
  )
}

export default Profile
