import axios from 'axios'
import React, { useState } from 'react'
import image2 from "../Images/image2.jpg";



const Home = () => {
    let divStyle = {
        backgroundImage:    `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the desired height
    
    }

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
        <div style={divStyle}>
            <div>
            <input type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
            <button onClick={searchFood}>Search</button>
            </div>

            {
                <div>
                    <p></p>
                </div>
            }
        </div>
    </>
  )
}

export default Home