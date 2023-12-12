import React from 'react'
import Cartitem from './Cartitem'

const Cart = () => {
   let cartitems = [
        {id:1,
         name:"item",
         description:'this is some description',
         price:123},
         {id:1,
            name:"item",
            description:'this is some description',
            price:123},
            {id:1,
                name:"item",
                description:'this is some description',
                price:123},
    ]
  return (
    <div className=' bg-gray-300 rounded-lg p-20'>
        <h2>Carts</h2>
       
        {cartitems.map(cartitem=>{
            return(
                <Cartitem item={cartitem}/>
                
            )
        })}
          <hr/>
            <div>
                <div className='flex justify-between my-5'>
                    <h2>Total Price</h2>
                    <h3>$ 5000</h3>
                </div>
                <div className='flex justify-end'>
                    <button className="border-2 border-indigo-500 px-4 text-indigo-500 py-2 rounded-md  focus:bg-indigo-500 mx-4">Close</button>
                    <button className="border-2 border-indigo-500 bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-indigo-600">Order</button>
                </div>
            </div>

       
    </div>
  )
}

export default Cart