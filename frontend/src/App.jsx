import { useState } from 'react';
import Input from './components/Input';
import './App.css';

function App() {
  const [emailText, setEmailText] = useState('');

  return (
    <div className='App'>
      <h1>Use AI to generate email replies</h1>
      <div>
        <Input onChange={(e) => setEmailText(e.target.value)} />
        <button onClick={() => console.log(emailText)}>Generate reply</button>
      </div>
    </div>
  );
}

export default App;
