import React from 'react'
import cartItems from './cart'
import reduce from './reduce'

const AppContext = React.createContext()

const AppProvider =({children}) =>{
    const [state,dispatch] = React.useReducer(reduce,cartItems);

    const remove =(id) =>{
        dispatch({type:'remove' , id});
    }

    const clear =()=>{
        dispatch({type:'clear'});
    }

    return(
        <AppContext.Provider value={{remove,clear}}>
            {children}
        </AppContext.Provider>
    );
}



export const useGlobalContext =()=>{
    return React.useContext(AppContext);
}

export {AppContext,AppProvider}