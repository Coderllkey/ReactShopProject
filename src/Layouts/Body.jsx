import React from 'react'
import Card from '../Components/Card'

const Body = () => {

    let items=[
        {id:1,
         name:"Shoe",
         price:3321.1,
         description:"Very good quality shoes with warrenty.",
        },
        {id:2,
            name:"T-shirt",
            price:234.003,
            description:"Very good qualitth warrenty.",
        },
        {id:3,
            name:"Trowser",
            price:754.99,
            description:"Very good quality shomore moare more warrenty.",
        },   
        {id:4,
            name:"Food",
            price:321.234,
            description:"Very good quality price and ensurenceith warrenty.",
        },
    ]

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-4  px-5 md:px-10 pt-5'>
       {items.map((item)=>
        <Card key={item.id} item={item} />
       )}
    </div>
  )
}

export default Body