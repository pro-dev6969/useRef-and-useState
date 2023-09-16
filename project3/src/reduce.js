import cartItems from "./cart";

const reduce =(state,action) =>{
    if(action.type==='remove'){
        return{...state , data : state.data.filter((item)=>item.id !== action.id)}
    }
    if(action.type==='clear'){
        return {...state , data : [] }
    }
}

export default reduce;
