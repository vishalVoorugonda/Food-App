import React from 'react'
import Food from './component/Food'
import  FoodProvider  from './component/Context'
import { Routes,Route } from 'react-router-dom'
import EachFoodItem from './component/EachFoodItem'
function App() {
  return (
    <div>
      <FoodProvider>
        <Routes>
          <Route path='/' element= {<Food/>} />
          <Route path="/food/:id" element={<EachFoodItem/>}/>
        </Routes>
      </FoodProvider>
    </div>
  )
}

export default App
