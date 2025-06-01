import { HashLink } from 'react-router-hash-link';

const SideButton = () => {
  return (
      <button className='side-button'>
        <HashLink smooth to="/#service-form" alt='Контакты'>Связаться с нами!</HashLink>
      </button>
  )
};

export default SideButton;