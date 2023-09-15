import cartItems from "./cart";

const reduce =(state,action) =>{
    if(action.type==='remove'){
        return(state.filter((item)=>item.id !== action.id))
    }
    if(action.type==='clear'){
        return (state=[])
    }
}

export default reduce;