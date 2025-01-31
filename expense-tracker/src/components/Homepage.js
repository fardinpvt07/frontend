import React from 'react'
import img1 from '../asset/img/photo.jpg'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <p>Welcome to Expense Tracker</p>
        <p>Manage all your expense</p>
        <img src={img1} />
      </div>
      <div className='rightcontainer'>
        <div className='formcard'>
          <div> 
            <h2 style={{ alignSelf: "center" }}>Login</h2></div>
          <div>
            <label>E-mail</label>
            <input
              required
              type="e-mail"
              placeholder='Enter your E-mail' />
          </div>
          <div>
            <label>Password</label>
            <input
              required
              type="password"
              placeholder='Enter your Password' />
          </div>

          <div>
            <button> Login </button>
          </div>
<div>
  <span style={{alignSelf:'center'}}> Not a user ? <Link to="register">Register</Link></span>
</div>
        </div>


      </div>


    </div>
  )
}

export default Homepage
