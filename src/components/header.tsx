// src/components/Header.tsx

import { FC, useState, useEffect } from 'react';

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set `isScrolled` to true if scrolled more than 50px
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 ${isScrolled ? "h-24" : "h-40"} fixed flex text-white left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in opacity-1 backdrop-blur-[12px]`}
    >
        <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home"><img className={`transition-all duration-300 ${
              isScrolled ? "w-12" : "w-20"
            }`} src='/logi.png' alt='Header Logo'></img></a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          
          <li>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
