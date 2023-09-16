import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css'
import {AppContext, useGlobalContext} from './context'


function App() {
  const {data ,remove , clear} = useGlobalContext()

  return (
    <div className="App">
      <div className='display'>
      {data.map((item)=>{
        const {id , title , price ,image} = item;
        return(
          <div key={id} class="card" >
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{price}</p>
              <a href="#" class="btn btn-primary" onClick={()=>remove(id)}>remove</a>
            </div>
          </div>
        );
      })}
      </div>
      <div className='bttn'>
      <button class="btn btn-primary" onClick={clear}>clear</button>
      </div>
    </div>
  );
}

export default App;
