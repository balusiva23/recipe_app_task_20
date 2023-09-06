import React, { useState, useEffect } from "react";
import { list } from "../data/Data"
import axios from "axios";
const Card = () => {
    const [foods, setFoods] = useState(null);
    const baseURL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`;

    useEffect(() => {
        const fetchData = async () => {
          await axios
            .get(baseURL)
            .then((response) => {
              setFoods(response.data);
            //   if(response.data.vegetarian === true){
            //     setVeraty("Veg")
            //     }else{
            //         setVeraty("Non Veg")
            //     }
              console.log(response.data);
            })
            .catch((err) => console.log(err));
        };
        fetchData();
      }, []);
  return (
    foods && (
    <>
   
    <div className='content grid3 mtop'>
    { foods.recipes.map((food, index) => {
        const { title, diets, extendedIngredients, image, vegetarian } = food
      
        return (
          <div className='box shadow' key={index}>
            <div className='img'>
              <img src={image} alt='' />
            </div>
            <div className='text'>
              <div className='category flex'>
                {/* vegetarian === false ? "#25b579" : "#ff9800" */}
                <span style={{ background: vegetarian === true ?  "green" :  "red", color: "#ffff" }}>{vegetarian === true ? "Veg" : "Non Veg"}</span>
                <i className='fa fa-heart'></i>
              </div>
              <h4>{title}</h4>
              <p>{"Diet associated with " + diets}</p>
              <p>
              {extendedIngredients.map((ingredient) => {
                    return `Ingredients: ${ingredient.name},${" "}`;
                  })}
              </p>
            </div>
            {/* <div className='button flex'>
              <div>
                <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
              </div>
              <span>{type}</span>
            </div> */}
          </div>
        )
      })}
    </div>
  </>
    )
  )
}

export default Card