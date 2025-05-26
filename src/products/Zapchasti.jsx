import React from "react";
import { Link } from 'react-router-dom';

const CatalogCard = ({ image, title, description, link }) => {
  return (
    <div className="container_card-iner">
      <div className="card">
        <div className="card-front">
          <div className="front-content">
            <img className="card_icon-images" src={image} alt={title} />
            <div className="card_name-header">{title}</div>
            <Link to={link} className="card-link-top">
              Подробнее
            </Link>
          </div>
        </div>

        <div className="card-back">
          <div className="back-content">
            <div className="back_content-description">{description}</div>
            <Link to={link} className="card-link-top">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Zapchasti = () => {
  const cardsData = [
    {
      image: "/images/1.png",
      title: "Лопасть",
      description:
        "Дробеметная лопатка (лопасть) предназначена для выброса дроби из турбины на обрабатываемую деталь.",
      link: "/lopast",
    },
    {
      image: "/images/2.png",
      title: "Распределительная камера",
      description:
        "Распределительная камера - это элемент, определяющий угол вылета дроби из турбины.",
      link: "/raspredelitelnaya-kamera",
    },
    {
      image: "/images/3.png",
      title: "Импеллер",
      description:
        "Импеллер или ускоритель предназначен для дозирования потока дроби, выбрасываемой на лопасть.",
      link: "/impeller",
    },
    {
      image: "/images/4.png",
      title: "Колесо для крепления лопастей",
      description:
        "Колесо для крепления лопастей турбины, по другому рабочее колесо, предназначено для передачи энергии от двигателя к лопастям.",
      link: "/Koleso-dlya-krepleniya-lopastey",
    },
    {
      image: "/images/5.png",
      title: "Верхняя броня турбины",
      description:
        "Верхняя броня защищает крышку корпуса турбины от прямого попадания дроби.",
      link: "/verkhnyaya-bronya-turbiny",
    },
    {
      image: "/images/6.png",
      title: "Боковая броня турбины",
      description:
        "Боковая броня защищает корпус турбины от прямого попадания дроби. ",
      link: "/bokovaya-bronya-turbiny",
    },
    {
      image: "/images/7.png",
      title: "Торцевая броня турбины",
      description:
        "Торцевая броня защищает корпус турбины, питатель и электродвигатель от прямого попадания дроби.",
      link: "/tortsevaya-bronya",
    },
    {
      image: "/images/9.png",
      title: "Защита дробеметной камеры",
      description:
        "Броня, или обшивка дробеметной камеры, предназначена для предотвращения износа корпуса дробемета.",
      link: "/zashchita-drobemetnoy-kamery",
    },
    {
      image: "/images/10.png",
      title: "Ковш для элеватора",
      description:
        "Ковш элеватора предназначен для рекуперации абразива в системе.",
      link: "/kovsh-dlya-elevatora",
    },
    {
      image: "/images/12.png",
      title: "Шторка для дробемета",
      description:
        "Дробеметная шторка предназначена для предотвращения вылета дроби из рабочей камеры.",
      link: "/shtorka-dlya-drobemeta",
    },
     {
      image: "/images/13.png",
      title: "Шнек",
      description:
        "Шнек предназначен для перемещения дроби от рабочей камеры до элеватора или от элеватора до накопительного бункера и турбин.",
      link: "/shnek",
    },
    {
      image: "/images/14.png",
      title: "Защита шнека",
      description:
        "Защита шнека дробемета предназначена для предотвращения износа дорогостоящего элемента дробемета - шнека.",
      link: "/zashchita-shneka",
    },
  ];

  return (
    <section className="product-catalog catalog-zapchasti" id="products">
      <h2>Запчасти на дробеметное оборудование</h2>

      <div className="container_card-catalog">
        {cardsData.map((card, index) => (
          <CatalogCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Zapchasti;