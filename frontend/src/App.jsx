import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Use AI to generate email replies</h1>
      <div>
        <div>
          <button>Respectful</button>
          <button>Casual</button>
          <button>Excited</button>
        </div>
        <textarea cols='50' rows='10'></textarea>
        <button>Generate reply</button>
      </div>
    </div>
  );
}

export default App;
