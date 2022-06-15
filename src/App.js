import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Main from './components/main'
import { Details } from './components/details';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try{
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const dataResp = await response.json();
      setData(dataResp.results)

    } catch(e) { console.log(e) }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ryck-and-morty' element={<Main mainData={data} />} />
        <Route path="/details/:userId" element={<Details identifier={data} />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
