import React, { useContext } from 'react'
import { itemContext } from '../store/itemContext';

const Nav = (props) => {
const {items} = useContext(itemContext)
  const totalCart  = items.reduce((currentVal, item)=>{
    return currentVal+item.amount;
  },0)

  return (
    <div className='px-5 md:px-10 pt-5'>

<nav className="bg-gray-900 p-4 rounded-md ">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <a href="#" className="text-white text-2xl font-bold">OnlineStore</a>
    </div>
    <div className="flex items-center">
      
      <button onClick={props.turnon}  className="bg-indigo-500 text-white px-3  py-1 rounded-md focus:outline-none focus:bg-indigo-600"> <i class="fa-solid fa-cart-plus"></i> Cart ({totalCart})</button>
    </div>
  </div>
</nav>


    </div>
  
  )
}

export default Nav