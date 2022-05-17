import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='logo'>
            <div>LOGO</div>
        </div>
        <nav className='nav-bar'>
            <ul className='nav-bar__links'>
                <li>SOCCER</li>
                <li>BASKETBALL</li>
                <li>HOCKEY</li>
            </ul>

        </nav>
        <div className='btn-sign'>
            <button>SIGN IN</button>
        </div>
    </header>
  )
}
