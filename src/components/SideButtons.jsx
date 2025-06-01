import { HashLink } from 'react-router-hash-link';
import useOutsideAlerter from './utils/ousideAlerter.hook';

const SideButtons = () => {
  const emailRef = useOutsideAlerter();
  const phoneRef = useOutsideAlerter();

  return (
    <div className='side-container'>
      <div className='side-button' ref={emailRef}>
        <img src='/images/email.svg'/>
        <a href='mailto:example@mail.ru'>example@mail.ru</a>
      </div>
      <div className='side-button' ref={phoneRef}>
        <img src='/images/phone-call.svg'/>
        <a href='tel:+7999123456'>+7999123456</a>
      </div>
      <button className='side-text'>
        <HashLink smooth to="/#service-form" alt='Контакты'>Связаться с нами!</HashLink>
      </button>

    </div>
  )
};

export default SideButtons;