import React, { useState, useEffect, useRef } from "react";
import "./product.css";
// Каталог продукция дробомет кранового типа
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Непрерывный цикл обработки",
      text: "Сетчатый конвейер обеспечивает автоматическую подачу и перемещение деталей через дробеметную камеру, что позволяет обрабатывать крупные партии без остановок. Это повышает производительность и сокращает время на подготовку к работе.",
    },
    {
      title: "Равномерная очистка со всех сторон",
      text: "Благодаря сетчатой структуре ленты дробь проникает сквозь конвейер, обрабатывая нижние и боковые поверхности изделий. Это гарантирует полное удаление загрязнений, ржавчины и окалины даже с мелких или сложных деталей (например, крепежа, решеток).",
    },
    {
      title: "Универсальность",
      text: "Установка подходит для обработки небольших изделий (метизы, отливки, металлопрокат), которые фиксируются на сетке без риска потери или повреждения. Регулируемая скорость ленты позволяет адаптировать процесс под разные типы материалов.",
    },
    {
      title: "Эффективность",
      text: "Сетчатая конструкция конвейера обеспечивает автоматический сбор отработанной дроби, окалины и пыли в поддон, упрощая обслуживание установки и минимизируя ручную очистку рабочей зоны.",
    },
  ];

  return (
    <section style={{ margin: "40px 0" }}>
      <h2 className="gradient-text">Основные преимущества</h2>
      <div className="container_modification_mufel-pech">
        {advantages.map((advantage, index) => (
          <div
            key={`advantage-${index}`}
            className="card_modification_mufel-pech"
          >
            <h3 className="card-mufelnya_pech_header">{advantage.title}</h3>
            <p className="card-mufelnya_pech_text">{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const DrobemetLentKonveer = () => {
  // Данные для карусели
  const carouselImages = [
    {
      id: 1,
      url: "",
    },
    {
      id: 2,
      url: "",
    },
    {
      id: 3,
      url: "",
    },
  ];

  // Данные для таблицы
  const tableData = [
    {
      model: "УБ-60",
      voltage: "380/50",
      conveyorWidth: "600",
      speed: "0.5-4",
      shot: "4*120",
      availability: "Под заказ",
    },
     {
      model: "УБ-80",
      voltage: "380/50",
      conveyorWidth: "800",
      speed: "0.5-4",
      shot: "4*120",
      availability: "Под заказ",
    },
     {
      model: "УБ-100",
      voltage: "380/50",
      conveyorWidth: "1000",
      speed: "0.5-4",
      shot: "4*180",
      availability: "Под заказ",
    },
     {
      model: "УБ-120",
      voltage: "380/50",
      conveyorWidth: "1200",
      speed: "0.5-4",
      shot: "4*260",
      availability: "Под заказ",
    },
    
    {
      isColSpan: true,
      text: "Очистка производится не со всех сторон",
    },
  ];

  // Состояния компонента
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    file: null,
  });

  const carouselRef = useRef(null);

  // Автопрокрутка карусели
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Обработчики событий
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 20 * 1024 * 1024) {
      alert("Файл слишком большой! Максимум 20 МБ");
      return;
    }
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Ваша заявка отправлена, с вами свяжутся в ближайшее время");
  };

  return (
    <div className="container">
      {/* Верхний блок */}
      <div className="top-section">
        <div className="image-block">
          <img
            src="/images/DROBEMEL_ICONS_URALBLST_TIPS.png"
            alt="Дробемет с сетчатым конвеер"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметная установка с вращающимся столом</h2>
          <p>
            Дробеметная установка проходная серии УБ, с горизонтальным ленточным сетчатым конвейером предназначена для  качественной обработки поверхностей изделий произвольной формы: больших количеств мелких деталей и тонкостенных отливок, керамических и других поверхностей, для обработки литых и сварных деталей, деталей, изготовленных методом холодной и горячей штамповки, подготовки под покрытия, упрочнения изделий, очистка от коррозии и старого лакокрасочного покрытия. 
          </p>
          <p>Дробеметная установка проходная серии УИД подходит для тщательной дробеметной обработки плоских, а также больших деталей со сложной геометрией при непрерывном процессе обработки. Имея большое разнообразие в надстройке эти установки отлично справляются с разнообразием поставленных задач, особенно с удалением грата, очисткой, приданием шероховатости, удалением окалины или ржавчины. Благодаря открытым зонам сетчатого конвейера на входе и выходе данные установки без проблем можно дополнить автоматизированными системами с манипулятором или роботом. Одновременная обработка верхней и нижней поверхности деталей позволяет значительно расширить спектр обрабатываемых деталей.</p>
        </div>
      </div>

      {/* Карусель */}
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={handlePrev}>
          &lt;
        </button>

        <div
          className="carousel-track"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((img) => (
            <div
              key={img.id}
              className="carousel-item"
              onClick={() => setFullscreenImage(img.url)}
            >
              <img
                src={img.url}
                alt={`Изображение ${img.id}`}
                style={{
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {/* Блок с преимуществами */}
      <AdvantagesSection />

      {/* Таблица */}
      <div className="box_mufelnye_pechi-table-model">
        <h2>Технические характеристики</h2>
        <div className="mobile-table_u">
          <table className="iksweb_l">
            <thead>
              <tr>
                <th className="table_sm-01">Модель</th>
                <th className="table_sm-01">Напряжение В/Гц</th>
                <th className="table_sm-01">Ширина конвеера, мм</th>
                <th className="table_sm-01">Скорость отчистки, м/мин</th>
                <th className="table_sm-01">Расход дроби, кг/мин</th>
                <th className="table_sm-01">Наличие</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) =>
                row.isColSpan ? (
                  <tr key="note">
                    <td className="table_sm-01" colSpan="6">
                      {row.text}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.model}>
                    <td className="table_sm-01">{row.model}</td>
                    <td className="table_sm-01">{row.voltage}</td>
                    <td className="table_sm-01">{row.conveyorWidth}</td>
                    <td className="table_sm-01">{row.speed}</td>
                    <td className="table_sm-01">{row.shot}</td>
                    <td className="table_sm-01">{row.availability}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="container-form">
      <form className="contact-form md-6" onSubmit={handleSubmit}>
        <h2>Интересует наше оборудование? Оставьте заявку и мы перезвоним</h2>
        <div className="form-row-combined">
          <div className="form-group">
            <input
              type="text"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Введите номер телефона"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Введите ваш Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-row-combined">
          <div className="form-group">
            <textarea
              placeholder="Введите что вас интересует"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="5"
            />
          </div>

          <div className="form-group">
            <div className="file-upload">
              <input type="file" onChange={handleFileChange} id="fileInput" />
              <label htmlFor="fileInput">
                <span>Вы можете прикрепить файл или чертеж весом до 20 МБ</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Отправить заявку</button>
      </form>
      </div>

      {/* Полноэкранный просмотр */}
      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <img src={fullscreenImage} alt="Полноэкранное изображение" />
        </div>
      )}
    </div>
  );
};

export default DrobemetLentKonveer;