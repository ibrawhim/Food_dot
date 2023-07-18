import axios from 'axios'
import React, { useState } from 'react'
import image2 from "../Images/image2.jpg";



const Home = () => {
    let bgstyle = {
        backgroundColor: '#ffbd6f'
    }

    let myColor = {
        color: '#8c101f'
    }
    let divStyle = {
        backgroundImage:    `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200vh'
    }
    let inPut = {
        backgroundColor: '#ffbd6f'
    }


    const [meal, setmeal] = useState([])
    const [food, setfood] = useState('')
    const [empty, setempty] = useState('')
    let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

    const searchFood = () => {
        if(food==''){
            setempty('This Field can"t be empty')
        }
        else{
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
    }

  return (
    <>
        <div style={divStyle} className='pt-lg-5'>

        <section className='container-fluid'>
            <div className="row">
                    <div className='col-lg-6 col-md-8 col-sm-12'>
                    <input className='form-control mb-2' style={inPut} type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
                    <p style={myColor} className='fw-semibold'>{empty}</p>
                    <button className='w-100 btn btn-dark' onClick={searchFood}>Search</button>
                    </div>

                    <div style={bgstyle} className=' col-lg-6 col-md-8 col-sm-12 rounded-3 px-5  shadow'>
                    {
                    meal.map((item,index)=>(
                    <div key={index}>
                        <h1 className='fw-bold' style={myColor}>{item.strMeal}</h1>
                        <h3 className='fw-bold'>Location: {item.strArea}</h3>
                        <h4>Ingredients: {item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}, {item.strIngredient4}, {item.strIngredient5},  {item.strIngredient6},  {item.strIngredient7},  {item.strIngredient8},  {item.strIngredient9}</h4>
                        <p>{item.strInstructions}</p>
                    </div>
                ))
                    }
                    </div>
                </div>
        </section>

        </div>
    </>
  ) 
}

export default Home