import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom'
import NavBar from './components/Navbar';
import Footer from './components/Footer';

import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Home from './pages/Home';

// function Hom() {
//   return <h1> hello </h1>
// }

function App() {
  return (
    <div>

      <Router>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>


  );
}

export default App;