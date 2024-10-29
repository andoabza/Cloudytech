import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logo } from './logo.svg'; 
function App() {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/startups')
      .then(response => setStartups(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Startup List</h1>
      <ul>
        {startups.map(startup => (
          <li key={startup.id}>
            <h2>{startup.name}</h2>
            <p>{startup.industry}</p>
            <p>{startup.description}</p>
          </li>))}
</ul>
<logo />
  
    </div>
  );
}

export default App;
