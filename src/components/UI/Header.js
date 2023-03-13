import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-list'>
           <Link className='links' to={"/"}> <li>Tasks tracker</li></Link>
           <Link className='links' to={"/employee"}> <li>Employee tracker</li> </Link>
            
        </ul>
      </nav>
    </div>
  )
}

export default Header
