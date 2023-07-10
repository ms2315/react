import{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount] = useState(0);

  function incHandler()
  {
    setCount(count+1);
  }
  function decHandler()
  {
    setCount(count-1);
  }
  function resetHandler()
  {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="Heading">Increment & Decrement</div>

      <div className="mid">
        <button className="button-1" onClick={decHandler}>-</button>
        <div className="count">{count}</div>
        <button className="button-2"  onClick={incHandler}>+</button>
      </div>
      <button className="reset" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
