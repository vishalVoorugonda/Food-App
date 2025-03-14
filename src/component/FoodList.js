import React from "react";
import styles from "../module/foodlist.module.css";
import { useFood } from "./Context";
import { Link } from "react-router-dom";

function FoodList() {
  const { data, loading } = useFood();

  return (
    <div className={styles.items}>
      <div className={styles.itemsDetails}>
        {loading ? (
            <div className={styles.loader}>
              <h2 >Loading...</h2>
            </div>
         
        ) : (
          <>
            {data.map((item) => (
              <div key={item.idMeal} className={styles.foodItem}>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <h1>{item.strMeal}</h1>
                <Link to={`/food/${item.idMeal}`}> <button className={styles.recipeBtn}>Receipe</button></Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FoodList;
