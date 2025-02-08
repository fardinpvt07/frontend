import React, { useState } from 'react'
import img1 from '../asset/img/photo.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Homepage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [showerror, setshowError] = useState(false)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // const [email, setEmail] = useState();
  // const [pass, setPass] = useState();
  const doLogin = (event) => {
    event.preventDefault();
    console.log("Clicked", inputs);
    if (inputs.pass.length >= 8) {
      navigate("/dashboard");
    }
    else {
      setshowError(true);
    }
  }
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <p>Welcome to Expense Tracker</p>
        <p>Manage all your expense here </p>
        <img src={img1} />
      </div>
      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
            <h2 style={{ alignSelf: 'center' }}>Login</h2></div>
          <form onSubmit={doLogin}><div>
            <label>Email</label>
            <input
              required
              type="email"
              placeholder='Enter your email'
              value={inputs.email || ''}
              onChange={handleChange}
              name='email' />
          </div>
            <div>
              <label>Password</label>
              <input
                required
                type="password"
                placeholder='Enter your password'
                value={inputs.pass || ''}
                onChange={handleChange}
                name='pass' 
                 />
            </div>
              {
              showerror?
            <div>
              <span style={{ color: 'red', alignSelf: 'center' }} > Password length must be greater than 8
            </span>
        </div> : null
}
        <div>
          <button> Login </button>
        </div>
        <div>
          <span style={{ alignSelf: 'center' }}> Not a user ? <Link to="register">Register</Link></span>
        </div>
      </form>
    </div>


      </div >


    </div >
  )
}

export default Homepage
