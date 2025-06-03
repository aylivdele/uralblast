import React from 'react';

// SVG иконка компонент
const TelegramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 47.7 47.7"
    className="custom-icon"
  >
    <circle 
      cx="23.8" 
      cy="23.8" 
      r="23.8" 
      fill="#232323" 
    />
    <path 
      d="M10.2 23.3s11.9-4.9 16.1-6.6c1.6-.7 7-2.9 7-2.9s2.5-1 2.3 1.4c-.1 1-.6 4.3-1.2 8C33.5 28.3 32.6 34 32.6 34s-.1 1.6-1.3 1.9c-1.2.3-3.1-1-3.4-1.2-.3-.2-5.2-3.3-7-4.8-.5-.4-1-1.2.1-2.2 2.5-2.3 5.4-5.1 7.2-6.9.8-.8 1.7-2.8-1.8-.4-4.9 3.4-9.7 6.5-9.7 6.5s-1.1.7-3.2.1c-2.1-.6-4.5-1.4-4.5-1.4s-1.7-1-1.3-2.1c.4-1.1 3.3-2.2 3.3-2.2z" 
      fill="#fff" 
    />
  </svg>
);

const VkIcon = () => (
   <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 47.66 47.66"
    className="custom-icon"
  >
    <circle 
      cx="23.83" 
      cy="23.83" 
      r="23.83" 
      fill="#232323" 
    />
    <path 
      d="M23.47 33.47h2.03s.61-.07.93-.41c.29-.31.28-.89.28-.89 0 0-.04-2.73 1.23-3.13 1.25-.4 2.85 2.64 4.54 3.81 1.28.88 2.26.69 2.26.69l4.54-.06s2.37-.15 1.25-2.02c-.09-.15-.66-1.38-3.37-3.91-2.84-2.65-2.46-2.22.96-6.8 2.09-2.79 2.92-4.49 2.66-5.22-.25-.69-1.78-.51-1.78-.51l-5.1.03s-.38-.05-.66.12c-.27.17-.45.55-.45.55 0 0-.81 2.16-1.89 3.99-2.27 3.87-3.18 4.08-3.56 3.83-.86-.56-.65-2.25-.65-3.45 0-3.75.57-5.32-1.11-5.72-.56-.13-.96-.22-2.38-.24-1.82-.02-3.37 0-4.24.43-.58.29-1.03.92-.76.96.34.05 1.1.21 1.51.76.52.71.51 2.32.51 2.32 0 0 .3 4.42-.7 4.97-.69.38-1.63-.39-3.66-3.91-1.04-1.8-1.82-3.79-1.82-3.79 0 0-.15-.37-.42-.57-.33-.24-.79-.32-.79-.32l-4.85.03s-.73.02-1 .34c-.24.28-.02.87-.02.87 0 0 3.8 8.91 8.1 13.41 3.95 4.12 8.43 3.85 8.43 3.85h0Z" 
      fill="#fff" 
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 47.7 47.7"
    className="play-icon"
  >
    <circle 
      cx="23.8" 
      cy="23.8" 
      r="23.8" 
      fill="#232323" 
    />
    <path 
      d="M35.4 20.8c0-2.8-2.3-5.1-5.1-5.1h-13c-2.8 0-5.1 2.3-5.1 5.1v6c0 2.8 2.3 5.1 5.1 5.1h13c2.8 0 5.1-2.3 5.1-5.1v-6zm-7.6 3.5l-5.8 2.9c-.2.1-1 0-1-.3v-5.9c0-.3.8-.4 1-.3l5.6 3c.2.1.4.5.2.6z" 
      fill="#fff" 
    />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { 
      icon: <TelegramIcon />, 
      url: '#', 
      label: 'Telegram' 
    },
    // Добавьте другие иконки аналогичным образом
    { 
      icon: <VkIcon />, // Замените на нужные SVG
      url: '#', 
      label: 'YouTube' 
    },
    { 
      icon: <YoutubeIcon />, // Замените на нужные SVG
      url: '#', 
      label: 'VKontakte' 
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__description">
            Компания <strong className="footer__brand">URALBLAST</strong> осуществляет производство дробеструйных 
            установок для очистки металла, компания является лидером на Российском рынке
          </p>
          <p className="footer__copyright">Права сайта защищены. ©2025</p>
        </div>
        
        <div className="footer__right">
          <div className="footer__socials">
            <h3 className="footer__subtitle">Наши мессенджеры</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <address className="footer__contacts">
            <h3 className="footer__subtitle"><strong>Контакты</strong></h3>
            <p className="contact-item">
              <a href="mailto:Pao84@mail.ru" className="contact-link">
                Pao84@mail.ru
              </a>
            </p>
            <p className="contact-item">
              <a href="tel:+79997773311" className="contact-link">
                +7 (919) 339-72-35
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;