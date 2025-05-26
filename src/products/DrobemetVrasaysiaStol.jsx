import React, { useState, useEffect, useRef } from "react";
import "./product.css";
// Каталог продукция дробомет кранового типа
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Универсальность",
      text: "Обработка деталей любых форм (коротких, длинных, широких) без сложного позиционирования.",
    },
    {
      title: "Интеграция в линии",
      text: "Возможность подключения конвейеров и роботизированных систем загрузки/выгрузки.",
    },
    {
      title: "Безопасность",
      text: "Соответствие международным стандартам, защита оператора от выброса абразива.",
    },
    {
      title: "Экономия времени",
      text: "Одновременная обработка нескольких зон за счёт продуманного расположения турбин.",
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

const DrobemetVrasaysiaStol = () => {
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
      model: "УБ-3512",
      voltage: "380/50",
      power: "10.25",
      turbineCount: "1",
      productivity: "2",
      ventilation: "2000",
      dimensions: "400",
      diameter: "1200",
      availability: "Под заказ",
    },
     {
      model: "УБ-3515",
      voltage: "380/50",
      power: "22",
      turbineCount: "2",
      productivity: "3",
      ventilation: "3500",
      dimensions: "1000",
      diameter: "1500",
      availability: "Под заказ",
    },
     {
      model: "УБ-3518",
      voltage: "380/50",
      power: "32.85",
      turbineCount: "2",
      productivity: "4",
      ventilation: "3100",
      dimensions: "1000",
      diameter: "1800",
      availability: "Под заказ",
    },
     {
      model: "УБ-3525",
      voltage: "380/50",
      power: "45.90",
      turbineCount: "2",
      productivity: "5",
      ventilation: "5200",
      dimensions: "1000",
      diameter: "2500",
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
            src="/images/DROBEMET_VRASAYSIE_STOL_TIPS.png"
            alt="Дробемет кранового типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметная установка с вращающимся столом</h2>
          <p>
            Дробемётные установки с вращающимся столом марки «URALBLAST» (серия УБ) предназначены для черновой очистки, упрочнения и подготовки поверхностей металлических деталей — от одиночных объектов до малых партий. Подходят для обработки стальных, чугунных, цветных отливок, кованых изделий и сварных конструкций, включая детали сложной геометрии.
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Конструкция и принцип работы</h2>
          <p>
            Вращающийся стол: Перфорированная платформа с медленным вращением обеспечивает равномерное воздействие абразива на все стороны детали. Загрузка — ручная или автоматическая (опция). 
            Турбины: 1–2 турбины, расположенные на стенах и потолке камеры, подают абразив под высоким давлением, охватывая даже труднодоступные зоны. 
            Система рециркуляции: Замкнутый цикл абразива с магнитным очистителем (опция) и фильтрацией повышает экономичность процесса. 
            Камера: Износостойкая защита внутренних поверхностей (сталь, резина), крупногабаритная дверь для удобной загрузки.  
          </p>
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
                <th className="table_sm-01">Мощность кВт</th>
                <th className="table_sm-01">К-во турбин</th>
                <th className="table_sm-01">
                  Расчетная производительность т/час
                </th>
                <th className="table_sm-01">
                  Производительность вентиляции, м3/час
                </th>
                <th className="table_sm-01">
                  Максимальная нагрузка на стол, М3/час
                </th>
                <th className="table_sm-01">
                  Диаметр стола, мм
                </th>
                <th className="table_sm-01">Наличие</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) =>
                row.isColSpan ? (
                  <tr key="note">
                    <td className="table_sm-01" colSpan="9">
                      {row.text}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.model}>
                    <td className="table_sm-01">{row.model}</td>
                    <td className="table_sm-01">{row.voltage}</td>
                    <td className="table_sm-01">{row.power}</td>
                    <td className="table_sm-01">{row.turbineCount}</td>
                    <td className="table_sm-01">{row.productivity}</td>
                    <td className="table_sm-01">{row.ventilation}</td>
                    <td className="table_sm-01">{row.dimensions}</td>
                    <td className="table_sm-01">{row.diameter}</td>
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

export default DrobemetVrasaysiaStol;