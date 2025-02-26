import React from 'react'
import styles from "../module/food.module.css"
import FoodList from './FoodList'
import { useFood } from './Context'
function Food() {
    const {input,handleInputChange,handleSearch,msg,error} = useFood()
  return (
    <div className={styles.container}>
        <div className={styles.inputs}>
            <h1>Food Recipe App</h1>
            <input value={input} onChange={handleInputChange} type='text' placeholder='Search....'/>
            <button onClick={handleSearch}>Search</button>
           <h2>{msg}</h2>
           <h3 style={{fontSize:"1.5rem",color:"red"}}>{error}</h3>
        </div>
           <FoodList/>
    </div>
  )
}

export default Food
