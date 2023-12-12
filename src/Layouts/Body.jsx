import React from 'react'
import Card from '../Components/Card'

const Body = () => {

    let items=[
        {id:1,
         name:"Shoe",
         price:3321,
         description:"Very good quality shoes with warrenty.",
        },
        {id:1,
            name:"T-shirt",
            price:234,
            description:"Very good quality shoes with warrenty.",
        },
        {id:1,
            name:"Trowser",
            price:754,
            description:"Very good quality shoes with warrenty.",
        },   
        {id:1,
            name:"Food",
            price:321,
            description:"Very good quality shoes with warrenty.",
        },
    ]

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-4  px-5 md:px-10 pt-5'>
       {items.map((item)=>
        <Card item={item} />
       )}
    </div>
  )
}

export default Body