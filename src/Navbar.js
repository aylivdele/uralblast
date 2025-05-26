
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (!href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const headerOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-blur">
      <nav className="bg-black py-4 flex items-center justify-between">
        <div className="ml-4 flex items-center">
          <img src="/images/icons_logo.png" className="font-bold text-xl text-white"></img>
        </div>
        <ul className="hidden md:flex items-center space-x-8 mr-4">
          <li>
            <HashLink smooth to="/#" className="text-gray-300 hover:text-white">Главная</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#products" className="text-gray-300 hover:text-white">Продукция</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" className="text-gray-300 hover:text-white">Услуги</HashLink>

          </li>
          <li>
            <Link to="/otchety" className="text-gray-300 hover:text-white">Отчёты</Link>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Контакты</a>
          </li>
        </ul>
        <button className="md:hidden flex justify-center w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;