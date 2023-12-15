import React, { useContext } from 'react'
import Cartitem from './Cartitem'
import { itemContext } from '../store/itemContext'

const Cart = (props) => {

  const {items,totalAmount} = useContext(itemContext)

 
  return (
    <div className=' bg-gray-300  rounded-lg p-5 w-full md:w-1/2  h-fit fixed top-20 md:left-1/4 '>
        <h2>Your Cart</h2>
        <section className='h-80 w-4/6 mx-auto overflow-auto'>
        {items.length < 1 ? (<div className='text-center font-bold text-indigo-600'>No items here Yet. Buy some!</div>):(<>
          {items.map(cartitem=>{
            return(
                <Cartitem key={cartitem.id} item={cartitem}/>
                
            )
        })}
        </>)}

        </section>

       
       
       
          <hr/>
            <div>
                <div className='flex justify-between my-5'>
                    <h2>Total Price</h2>
                    <h3>$ {totalAmount.toFixed(2)}</h3>
                </div>
                <div className='flex justify-end'>
                    <button onClick={props.turnoff} className="border-2 border-indigo-500 px-4 text-indigo-500 py-2 rounded-md focus:text-white  focus:bg-indigo-500 mx-4">Close</button>
                    {items.length > 0 && (<>
                      <button className="border-2 border-indigo-500 bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-indigo-600">Order</button>
                    
                    </>)}
                </div>
            </div>

       
    </div>
  )
}

export default Cart