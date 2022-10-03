import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <p>The page you're looking for no longer exists, please feel free to head back to the home page!</p>
    <button>
    <NavLink to='/'>Home</NavLink>
    </button>
    </>
  )
}

export default NotFound;