import React, { useContext, useState } from 'react'
import { itemContext } from '../store/itemContext';

const Card = ({item}) => {
  const {name,id, price, description} = item;

  const {addItem} = useContext(itemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

 
  const addToCartHandler = () => {
    if(currentAmountNumber<1 || currentAmountNumber > 5 ){
      alert('please enter a valid amount to order')
      return;
    }
   addItem({
    id,
    name,
    price,
    amount: currentAmountNumber
    
   })
  }

  return (
   
<div className=" mx-auto bg-gray-900 text-white rounded-xl shadow-md overflow-hidden">
  <div className="p-8">
    <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">{name}</div>
    <p className="mt-2 text-gray-400">{description}</p>
    <div className="mt-4">
      <p className="text-gray-300 font-semibold">$ {price}</p>
    </div>
    <div className="mt-4 flex items-center">
      <input value={currentAmount} min={1} max={5}  
              type="number"
              onChange={(e)=>{setCurrentAmount(e.target.value)}} 
       placeholder="Quantity" className="px-3 py-2 mr-2 w-16 text-gray-900 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-white"/>
      <button onClick={addToCartHandler} className="bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-indigo-600">
        Add to Cart
      </button>
    </div>
  </div>
</div>








  )
}

export default Card