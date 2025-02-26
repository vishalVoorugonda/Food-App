import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "../module/eachfooditem.module.css"

function EachFoodItem() {
    const[foodItem,setFoodItem] = useState({})
    const {id} = useParams()

    async function FetchFoodData() {
          try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await response.json()
            setFoodItem(data.meals?data.meals[0]:{})
          } catch (error) {
              console.log("Errors: ",error)
          }
    }
    
    console.log(id)
    console.log(foodItem)
    useEffect(()=>{FetchFoodData()},[id])
  return (
    <div className={styles.container}>
        <div className={styles.eachitem}>
            <img src={foodItem.strMealThumb} alt={foodItem.strMeal}/>
             <p>{foodItem.strInstructions}</p>
        </div>
        
    </div>
  )
}

export default EachFoodItem
