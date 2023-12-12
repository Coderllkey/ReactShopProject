import React from 'react'

const Cartitem = ({ item }) => {
    return (
        <div>
            <div className='bg-gray-900 rounded-lg  w-50'>

                <div className=" mx-auto my-2 text-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-5 flex">
                        <div className='w-60 '>
                            <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">{item.name}</div>
                            <p className="mt-2 text-gray-400">{item.description}</p>

                        </div>

                        <div className="mt-4">
                            <p className="text-gray-300 font-semibold">$99.99</p>
                            <input type="number" placeholder="Quantity" class="px-3 py-2 mr-2 w-16 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-white" />

                        </div>

                    </div>
                </div>

            </div>
          
        </div>

    )
}

export default Cartitem