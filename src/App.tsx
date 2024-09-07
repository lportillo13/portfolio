import React, { FC, useEffect } from 'react';
import Header from './components/header';
import Home from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import './App.css';

const App: FC = () => {  
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      fadeInElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <main className="md:m-4">
        <Home />
        <About />
        <div className="pointer-events-none relative z-10 mx-auto h-[35rem] md:h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-80 md:before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,#39ff14,transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-[hsl( 0 0% 14.9%)] after:bg-black">
        </div>
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;