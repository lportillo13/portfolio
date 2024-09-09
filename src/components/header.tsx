import { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing icons

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`transition-all duration-300 ${isScrolled ? "h-24 backdrop-blur-[12px]" : "h-40"} fixed flex text-white left-0 top-0 z-50 w-full`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">
            <img
              className={`transition-all duration-300 ${isScrolled ? "w-12" : "w-20"}`}
              src='/logi.png'
              alt='Header Logo'
            />
          </a>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden z-10">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Dropdown Menu (mobile) */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center md:justify-end space-y-8 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:relative md:opacity-100 md:visible md:flex-row md:flex md:space-y-0 md:space-x-4 md:h-auto md:bg-transparent`}
        >
          <li onClick={closeMenu}>
            <a href="#home" className="text-2xl hover:underline md:text-base">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about" className="text-2xl hover:underline md:text-base">About</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#portfolio" className="text-2xl hover:underline md:text-base">Portfolio</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact" className="text-2xl hover:underline md:text-base">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
