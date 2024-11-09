"use client"
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

 function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[]);
  return (
   
    <div className='flex flex-col '>
    <Header />
    <Hero />
    <About />
    <Product />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home;