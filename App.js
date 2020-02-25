import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio"
import Skillset from './components/Skillset/Skillset';
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
      <Skillset/>
      <Footer/>
    </div>
  );
}

export default App;
