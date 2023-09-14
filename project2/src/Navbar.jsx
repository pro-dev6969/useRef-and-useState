import React from 'react'
import {useContext , useState , createContext} from 'react'
import NavList from './NavList'

export const NavbarContext = createContext()

function Navbar() {

    const[user,setUser] = useState({name:"bob"});
    const logout = () =>{
        setUser(null);
    }
    const changeUser = (newUser) =>{
        setUser((ur)=>{
           return{...ur,name:newUser}
        });
    }
  return (
    <NavbarContext.Provider value={{user , changeUser , logout}}>
        <nav className='Navbar'>
            <h2 className='heading'>CONTEXT API</h2>
            <NavList />
        </nav>
    </NavbarContext.Provider>
  )
}

// custom Hook
export const useAppContext =()=> useContext(NavbarContext)


export default Navbar