
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onBurgerClick = useCallback((e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <div className="bg-blur navbar">
      <nav className="bg-black py-4 flex items-center justify-between gap-2">
        <div className="ml-4 flex items-center">
          <img src="/images/icons_logo.png" className="font-bold text-xl text-white" alt='logo'></img>
        </div>
        <ul className={`flex justify-items-center flex-row items-center space-x-8 mr-4`}>
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
            <Link to="/news" className="text-gray-300 hover:text-white">Новости</Link>
          </li>
          <li>
            <Link to="/contacts" className="text-gray-300 hover:text-white" alt='Контакты'>Контакты</Link>
          </li>
        </ul>
        {/* <button className="md:hidden flex justify-center w-8 h-8 hover:bg-gray-600 rounded-lg burger" onClick={ onBurgerClick }>
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
        </button> */}
      </nav>
    </div>
  );
};

export default Navbar;