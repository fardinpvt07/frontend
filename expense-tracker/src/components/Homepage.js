import React from 'react'
import img1 from '../asset/img/WhatsApp Image 2025-01-25 at 21.15.16_14405a77.jpg'
function Homepage() {
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <p>Welcome to Expense Tracker</p>
        <p>Manage all your Expense</p>
        <img src={img1} />
      </div>
      <div className='rightcontainer'>
        <div className='formcard'>
         <div> <h2 style={{alignSelf:"center"}}>Register</h2></div> 
          <div>
            <label>Name</label>
            <input 
            required
            type="text" 
            placeholder='Enter your Name'/>
          </div>
          <div>
            <label>E-mail</label>
            <input 
            required
            type="e-mail" 
            placeholder='Enter your E-mail'/>
          </div>
          <div>
            <label>Password</label>
            <input 
             required
             type="password" 
             placeholder='Enter your Password'/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input 
             required
             type="password" 
             placeholder='Enter your Password'/>
          </div>
          <div>
          <button> Submit </button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Homepage
