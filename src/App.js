import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';
import Logo from './components/Logo';


const App = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Logo />
      <Form 
        getQuery={q => setQuery(q)} 
        query={query} 
      />
      <Cards 
        data={data}
        isLoading={isLoading}  
      />
    </div>
  );
};

export default App;
