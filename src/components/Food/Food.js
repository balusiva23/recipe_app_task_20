import React from 'react'
import "./Food.css"
import Card from './Card'

const Food = () => {
  return (
    <>
    <section id='Food' className='recent padding'>
    <div className='container'>
    <div className='heading'>
        <h1>Popular Food</h1>
        <p>we provide a variety of food and beverage recipes with high taste from famous chefs.</p>
      </div>
      <Card />
    </div>
  </section>
      <section className='footerContact' id='contact'>
      <div className='container'>
        <div className='send flex'>
          <div className='text'>
            <h1>Do You Have Questions ?</h1>
            <p>We'll guide you to advance your culinary skills and expand your recipe repertoire.</p>
          </div>
          <button className='btn5'>Contact Us Today</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Food