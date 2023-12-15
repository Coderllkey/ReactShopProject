import React from 'react'
import Cart from './Cart'

const Backdrop = (props) => {
  return (
    <>
{props.cartStatus && (
      <div className=''>

   <div onClick={props.cartStatusOff} className=' z-8 bd flex justify-center items-center  min-h-full fixed top-0 min-w-full '/>
   <Cart turnoff={props.cartStatusOff} />



      </div>
  
     
 
)}
    
    </>
    
  )
}

export default Backdrop