import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/food/list');
      setFood(data);
      console.log('data from api', data);
    }
    fetch();
  }, [])

  return (
    <div className="App">
      {
        food?.map(f => <div key={f._id}>{f.name}</div>)
      }
    </div>
  );
}

export default App;
