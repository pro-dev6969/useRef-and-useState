import React , {useRef,useState,useEffect} from 'react';

function App(){

    const [value,setValue] = useState('')
    const [count,setCount] = useState(0);
    const refContainer = useRef()
    
    useEffect(()=>{
        refContainer.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(refContainer.current.value);
        refContainer.current.value = '';
    }
    const increment = () =>{
        setCount((cnt)=>cnt+1);
    }
    return (
        <div className='App'>
            <div className='form'> 
            <form  onSubmit={handleSubmit}>
                <input type='text' ref={refContainer}></input>
                <button className='btn'>enter</button>
            </form>
            </div>
            <div className='display'>
                <h2>{value}</h2>
            </div>
            <div className='counter'>
                <div className='counting-el'>
                    <button className='btn' onClick={increment}>increment</button>
                    <div className='display-count'>{count}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
