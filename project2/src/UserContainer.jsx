import React , {useRef} from 'react'
import {useAppContext , NavbarContext} from './Navbar'



function UserContainer() {
    const {user , changeUser , logout} = useAppContext()
    const refContainer = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        changeUser(refContainer.current.value);
    }

  return (
    <div className='user-container'>
        {(user.name === 'bob')?
        <div className='user-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={refContainer} placeholder='user' />
                <button>login</button> 
            </form>
        </div>:
        <div className='display'>
            <p>Welcome <strong>{user.name}</strong> !</p>
        </div>
}
    </div>
  )
}

export default UserContainer