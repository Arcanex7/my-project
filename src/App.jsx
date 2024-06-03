import { useState } from 'react';
import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Advantage from './components/Advantage';
import Faq from './components/Faq';
import Hero from './components/Hero';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Features/> */}
    <Aboutus/>
    
    <Advantage/>
    <Faq/>
    <Footer/>
     
    </>
  )
}

export default App;
