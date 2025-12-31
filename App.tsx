
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HCMSpace from './components/HCMSpace';
import Gallery from './components/Gallery';
import Leadership from './components/Leadership';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <HCMSpace />
        <Gallery />
        <Leadership />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
