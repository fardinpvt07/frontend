import React from 'react'
import logo from '../asset/img/WhatsApp Image 2025-01-25 at 21.15.16_995210a4.jpg'
function Header() {
    return (
        <div className='header'>
            <img src={logo} />
        <h2>Expense Tracker</h2>
        </div>
    )
}

export default Header