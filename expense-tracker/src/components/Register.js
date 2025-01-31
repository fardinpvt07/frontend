import React from 'react'

function Register() {
    return (
        <div>
            <div className='formcard'>
                <div> <h2 style={{ alignSelf: "center" }}>Register</h2></div>
                <div>
                    <label>Name</label>
                    <input
                        required
                        type="text"
                        placeholder='Enter your Name' />
                </div>
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
                    <label>Confirm Password</label>
                    <input
                        required
                        type="password"
                        placeholder='Enter your Password' />
                </div>
                <div>
                    <button> Submit </button>
                </div>

            </div>
        </div>
    )
}

export default Register