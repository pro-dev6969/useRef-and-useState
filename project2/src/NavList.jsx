import React from 'react'
import UserContainer from './UserContainer'
function NavList() {
  return (
    <div className='Navlist'>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
        </ul>
        <UserContainer />
    </div>
  )
}

export default NavList