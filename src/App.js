import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';


const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Form />
      <Cards data={data} />
    </div>
  );
};

export default App;
