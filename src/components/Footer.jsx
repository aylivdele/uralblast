import React from 'react';

// SVG иконка компонент
const TelegramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 61.33 64.54"
    width="32"
    height="32"
    fill="currentColor"
  >
    <defs>
      <radialGradient 
        id="telegram-gradient" 
        cx="31.65" 
        cy="34.86" 
        r="29.68"
      >
        <stop offset="0" stopColor="#000057"/>
        <stop offset="0.39" stopColor="#7474a4" stopOpacity="0.54"/>
        <stop offset="0.79" stopColor="#d8d8e5" stopOpacity="0.15"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </radialGradient>
    </defs>
    
    <g style={{ isolation: 'isolate' }}>
      <circle 
        cx="31.65" 
        cy="34.86" 
        r="29.68" 
        fill="url(#telegram-gradient)" 
        style={{ mixBlendMode: 'multiply', opacity: 0.8 }}
      />
      <g>
        <circle cx="23.83" cy="23.83" r="23.83" fill="#232323"/>
        <path 
          fill="#fff"
          d="M10.17,23.27s11.92-4.89,16.06-6.62c1.58-.69,6.96-2.89,6.96-2.89,0,0,2.48-.96,2.27,1.38-.07,.96-.62,4.34-1.17,7.99-.83,5.17-1.72,10.82-1.72,10.82,0,0-.14,1.59-1.31,1.86-1.17,.28-3.1-.96-3.45-1.24-.28-.21-5.17-3.31-6.96-4.82-.48-.41-1.03-1.24,.07-2.21,2.48-2.27,5.44-5.1,7.24-6.89,.83-.83,1.65-2.76-1.79-.41-4.89,3.38-9.72,6.55-9.72,6.55,0,0-1.1,.69-3.17,.07-2.07-.62-4.48-1.45-4.48-1.45,0,0-1.65-1.03,1.17-2.14h0Z"
        />
      </g>
    </g>
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
      icon: <TelegramIcon />, // Замените на нужные SVG
      url: '#', 
      label: 'YouTube' 
    },
    { 
      icon: <TelegramIcon />, // Замените на нужные SVG
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
                +7 (999) 777-33-11
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;