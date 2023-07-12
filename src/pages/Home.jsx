import axios from 'axios'
import React from 'react'


const Home = () => {
    let endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

    const searchFood = () => {
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    }

  return (
    <>
        <div>
            <input type="text" />
            <button onClick={searchFood}>Search</button>
        </div>
    </>
  )
}

export default Home