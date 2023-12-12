import React from 'react'

const Nav = () => {
  return (
    <div className='px-5 md:px-10 pt-5'>

<nav class="bg-gray-900 p-4 rounded-md ">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
      <a href="#" class="text-white text-2xl font-bold">OnlineStore</a>
    </div>
    <div class="flex items-center">
      
      <button  class="text-gray-300 hover:text-white px-3 py-2"> <i class="fa-solid fa-cart-plus"></i> Cart (1)</button>
    </div>
  </div>
</nav>


    </div>
  
  )
}

export default Nav