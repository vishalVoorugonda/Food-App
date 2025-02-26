import { createContext, useContext, useEffect, useState } from "react";

export const FoodItems = createContext()

export default function FoodProvider({children}){
     const[input,setInput] = useState('')
     const [data,setData] = useState([])
     const [loading,setLoading] = useState(false)
     const[msg,setMsg] = useState('')
     const [error,setError] = useState('')

    async function FetchData(input) {
        setLoading(true)
        setError("")
        try {
            const response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)   
           const result = await response.json()
           setData(result.meals||[]) 
           if (!result.meals) {
            setError("Data Not Found!");  
        }
        } catch (error) {
            console.log("Error: ",error)
        } finally{
            setLoading(false)
        }      
    }

    useEffect(()=>{FetchData("")},[])

     const handleInputChange =(e)=>{
        setInput(e.target.value)
     }

     
     const handleSearch = () => {
        if (input.trim() === "") {
            setMsg("Please Enter a Food Item");
            setError("");  
            return;
        }

        setMsg("");
        FetchData(input);
        setInput("");  
    };
    
     return(
    <FoodItems.Provider value={{input,handleInputChange,handleSearch,data,loading,msg,error}}>
        {children}
    </FoodItems.Provider>
    )
}

export const useFood =()=>{
    return useContext(FoodItems)
}