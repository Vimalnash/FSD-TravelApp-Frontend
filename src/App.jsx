import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Destination from './Components/Destination';

const App = () => {
  return (
    <div className='bg-blue-200'>
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="features"><Features /></div>
        <div id="destination"><Destination /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>
      <div id="footer"><Footer /></div>
    </div>
  )
}

export default App
