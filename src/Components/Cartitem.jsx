import React, { useContext } from 'react'
import { itemContext } from '../store/itemContext'


const Cartitem = ({ item }) => {

    const {addItem , removeItem} = useContext(itemContext)

    const increaseItem = () =>{
    addItem({...item, amount: 1})

    }
    const decreaseItem = () =>{
    removeItem(item.id)
    }
    return (
        <div>
            <div className='bg-gray-900 rounded-lg  w-50'>

                <div className=" mx-auto my-2 text-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-5 flex">
                        <div className='w-60 '>
                            <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">{item.name}</div>
                            <p className="mt-2 text-gray-400">$ {item.price}</p>

                        </div>

                        <div className="mt-4  rounded-lg p-1">
                            <p className="text-gray-300 font-semibold   text-center"> <span className='bg-gray-100 text-gray-900 rounded-md px-2 py-1 '>x{item.amount}</span> </p>
                            <div className=' mt-3'>
                                <button onClick={increaseItem} className=' bg-indigo-500 text-white px-3  py-1 rounded-md focus:outline-none focus:bg-indigo-600'>+</button>
                                <button onClick={decreaseItem} className=' bg-indigo-500 text-white px-3 mx-2 py-1 rounded-md focus:outline-none focus:bg-indigo-600'>-</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
          
        </div>

    )
}

export default Cartitem