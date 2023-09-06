import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo-new.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={ "flex"}>
              
                <li><a href='#hero'>Home</a></li>
                <li><a href='#Food'> Our Recipes </a></li>
                <li><a href='#contact'>Contact</a></li>
             
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          {/* <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header