import axios from 'axios'
import React, { useState } from 'react'



const Home = () => {
    const [food, setfood] = useState({})
    let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

    const searchFood = () => {
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data);
            setfood(response.data)
        })
        .catch((error)=> {
            console.log(error);
        })
    }

  return (
    <>
        <div>
            <input type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
            <button onClick={searchFood}>Search</button>
        </div>
    </>
  )
}

export default Home