import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-list'>
           <Link to={"/"}> <li>Tasks tracker</li></Link>
           <Link to={"/employee"}> <li>Employe tracker</li> </Link>
            
            <li></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
