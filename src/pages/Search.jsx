import axios from 'axios'
import React, { useState } from 'react'
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.gif";



const Search = () => {
    let bgstyle = {
        backgroundColor: '#ffbd6f'
    }

    let myColor = {
        color: '#8c101f'
    }
    let divStyle = {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        url(${image2})`,
        backgroundSize: 'cover',
    
    }
    let inPut = {
        backgroundColor: '#ffbd6f'
    }

    let bgWine = {
        backgroundColor: '#8c101f',
        color: '#ffbd6f'
    }
    


    const [meal, setmeal] = useState([])
    const [food, setfood] = useState('')
    const [empty, setempty] = useState('')
    let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

    const searchFood = () => {
        axios.get(endpoint)
        .then((response)=>{
            if(food==''){
                setempty('Field Empty')
            }
            else if(!response.data.meals){
                setempty('Food is not found');
            }
            else{
            console.log(response.data.meals);
            setmeal(response.data.meals)
            setfood('')
            setempty('')
            }
        })
        .catch((error)=> {
            console.log(error);
        })
    }

  return (
    <>
        <div style={divStyle} className='pt-lg-5 bg-fixed'>

        <section className='container-fluid'>
            <div className="row">
                <div className='col-lg-6 col-md-8 col-sm-12 pt-2 rounded-3'>
                    <input className='form-control mb-2' style={inPut} type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
                    <p style={myColor} className='fw-semibold'>{empty}</p>
                    <button className='w-100 btn' style={bgWine} onClick={searchFood}>Search Food</button>
                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 rounded-3'>
                   
                </div>
            </div>
        </section>
        <section className='container-fluid mt-3'>
                {
                    meal.map((item,index)=>(
                    <div className='row mt-3'>
                    <div style={bgstyle} className=' col-lg-6 col-md-8 col-sm-12 rounded-3'>
                    <div key={index}>
                        <h1 className='font-bold text-3xl mt-2' style={myColor}>{item.strMeal}</h1>
                        <h3 className='font-bold text-3xl mt-2'>Location: {item.strArea}</h3>
                        <h4><span className='text-2xl font-medium'>Ingredients:</span> {item.strIngredient1} {item.strIngredient2} {item.strIngredient3} {item.strIngredient4} {item.strIngredient5}  {item.strIngredient6}  {item.strIngredient7}  {item.strIngredient8}  {item.strIngredient9}</h4>
                        <p className='text-justify leading-6'><span className='text-2xl font-medium'>How to make:</span> {item.strInstructions}</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 rounded-3'>
                    <img className='rounded-3 img-fluid w-100' src={item.strMealThumb} alt="" />
                </div>

            </div>
                ))
                }
        </section>

        </div>
    </>
  ) 
}

export default Search