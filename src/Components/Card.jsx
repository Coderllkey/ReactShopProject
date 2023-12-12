import React from 'react'

const Card = ({item}) => {
  return (
   
<div class=" mx-auto bg-gray-900 text-white rounded-xl shadow-md overflow-hidden">
  <div class="p-8">
    <div class="uppercase tracking-wide text-sm text-gray-300 font-semibold">Product Name</div>
    <p class="mt-2 text-gray-400">Description of the product goes here. You can add more details about the product. This can include features, dimensions, materials, and more to help customers understand the product better.</p>
    <div class="mt-4">
      <p class="text-gray-300 font-semibold">$99.99</p>
    </div>
    <div class="mt-4 flex items-center">
      <input type="number" placeholder="Quantity" class="px-3 py-2 mr-2 w-16 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-white"/>
      <button class="bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-indigo-600">
        Add to Cart
      </button>
    </div>
  </div>
</div>








  )
}

export default Card