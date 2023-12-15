import React from 'react'
import Nav from '../Components/Nav'
import Summary from '../Components/Summary'

const Header = (props) => {
  return (
    <div>
        <Nav turnon = {props.cartStatusOn}/>
        <Summary/>
    </div>
  )
}

export default Header