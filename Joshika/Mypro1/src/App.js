import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Fact from './Fact';
import Rps from './Rps';
import Todo from './Todo';
import Cal from './Cal';
import Simcomint from './Simcomint';

function Home() {
  const [fact, setFact] = useState(false); 
  return (
    <div id='space'>
      <Link to="/factorial">
        <button className='butn1'>Factorial Program</button>
      </Link>
      <Link to="/rps">
        <button className='butn1'>Rock Paper Scissors Program</button>
      </Link>
      <Link to="/todo">
        <button className='butn1'>To Do List Adding Program</button>
      </Link>
      <Link to="/cal">
        <button className='butn1'> Simple Caluculater Program</button>
      </Link>
      <Link to="/simcon">
        <button className='butn1'> Simple & Coumpound Intrest Program</button>
      </Link>
    </div>
  );
}

function App() {  
  return (
    <>
    <center>Concepts:- Props, Components</center>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factorial" element={<Fact />} />
        <Route path="/rps" element={<Rps />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/cal" element={<Cal />} />
        <Route path="/simcon" element={<Simcomint/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;