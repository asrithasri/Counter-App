
import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  // const Increment =()=>{
  //   setCount((prev)=>prev + 1)
  //   }

  //   const Decrement =()=>{
  //     setCount((prev)=>prev - 1)
  //   }


    const handleClick = (event) => {
      if(event ==="increment"){
        setCount((prev)=>prev + 1)
      }
      else if(event==="decrement"){
        setCount((prev)=>prev - 1)
      }

    }


  return (
    <div className="App">
      <h1>Counter App</h1>

      <div>Count: {count}</div>

      <button type='submit' onClick={()=>handleClick("increment")}>Increment</button>

      <button type='submit' onClick={()=>handleClick("decrement")}>Decrement</button>


      
    </div>
  );
}

export default App;
