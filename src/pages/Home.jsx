import axios from 'axios'
import React, { useState } from 'react'
import image2 from "../Images/image2.jpg";



const Home = () => {
    let divStyle = {
        backgroundImage:    `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    }
    let inPut = {
        backgroundColor: '#ffbd6f'
    }

    const [meal, setmeal] = useState([])
    const [food, setfood] = useState('')
    let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

    const searchFood = () => {
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data.meals);
            setmeal(response.data.meals)
            setfood('')
        })
        .catch((error)=> {
            console.log(error);
        })
    }

  return (
    <>
        <div style={divStyle}>
            <div className='w-50'>
            <input className='form-control' style={inPut} type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
            <button className='w-100 btn btn-dark' onClick={searchFood}>Search</button>
            </div>

        {
          meal.map((item,index)=>(
            <div key={index}>
                <h1>{item.strMeal}</h1>
            </div>
          ))
        //   <p className='text-light fs-5'>{food.strMeal}</p>
        }
        </div>
    </>
  )
}

export default Home