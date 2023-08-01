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
        width: '100%',
        height: '100%',
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
        <div style={divStyle} className='pt-lg-5'>

        <section className='container-fluid'>
            <div className="row">
                <div className='col-lg-6 col-md-8 col-sm-12 pt-2 rounded-3'>
                    <input className='form-control mb-2' style={inPut} type="text" placeholder='Enter food here' onChange={(e)=> setfood(e.target.value)}/>
                    <p style={myColor} className='fw-semibold'>{empty}</p>
                    <button className='w-100 btn' style={bgWine} onClick={searchFood}>Search Food</button>
                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 rounded-3'>
                    {/* <p>
                        Lorem, ipsum dolor sit, amet consectetur adipisicing eklit. Dolor aperiam nemo neque ut autem. Nobis, aspernatur magni molestiae quo mollitia ipsam perferendis maxime dignissimos. Nemo, ullam aliquam quod odit deleniti eius sed magni, autem dolorum debitis aliquid nostrum culpa. Maxime doloribus laboriosam, reprehenderit odit necessitatibus cum distinctio possimus perferendis vel!
                    </p> */}
                </div>
            </div>
        </section>
        <section className='container-fluid mt-3'>
                {
                    meal.map((item,index)=>(
                    <div className='row mt-3'>
                    <div style={bgstyle} className=' col-lg-6 col-md-8 col-sm-12 rounded-3'>
                    <div key={index}>
                        <h1 className='fw-bold' style={myColor}>{item.strMeal}</h1>
                        <h3 className='fw-bold'>Location: {item.strArea}</h3>
                        <h4>Ingredients: {item.strIngredient1} {item.strIngredient2} {item.strIngredient3} {item.strIngredient4} {item.strIngredient5}  {item.strIngredient6}  {item.strIngredient7}  {item.strIngredient8}  {item.strIngredient9}</h4>
                        <p>{item.strInstructions}</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-8 col-sm-12 rounded-3'>
                    <img className='rounded-3 img-fluid w-100 h-75' src={item.strMealThumb} alt="" />
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