import React from 'react'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='left-container'>
            <div>
                <img src={require('./Troll Face.png')} alt="troll face"></img>
            </div>
            <div>
                <p>Meme Generator</p>
            </div>
        </div>
        <div>
            <p>React Course-Project 3</p>
        </div>
    </div>
  )
}
 

export default Navbar