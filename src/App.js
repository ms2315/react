import './App.css';
import Tours from './components/Tours'
import data from './data'
import { useState } from 'react';

function App() {

  const[tours , setTours] = useState(data);

  function removeTour(id)
  {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }
  
  return (
    <div className='App'>

      <Tours tours={tours} removeTour={removeTour}></Tours>
        
    </div>
  );
}

export default App;