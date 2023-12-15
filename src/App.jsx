import React from 'react'
import Main from './Layouts/Main'
import ItemContextProvider from './store/itemContext'

const App = () => {
  return (
    <ItemContextProvider>
        <Main/>
   
    </ItemContextProvider>
    
  )
}

export default App