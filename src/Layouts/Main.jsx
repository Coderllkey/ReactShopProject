import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Backdrop from '../Components/Backdrop'

const Main = () => {
  const [showcart, setShowcart] = useState(false);

  const TurnOn =()=>{
    setShowcart(true)
  }
  const TurnOff = () =>{
    setShowcart(false);
  }
  return (
    <div>
        <Header cartStatusOn={TurnOn}/>
        <Body/>
        <Backdrop  cartStatusOff = {TurnOff} cartStatus = {showcart} />
        
    </div>
  )
}

export default Main