import React, { useState, useEffect, useRef } from "react";
// Каталог продукция дробомет барабанного типа
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Компактность и надёжность",
      text: "Модульная конструкция упрощает обслуживание (замена лопаток — 15 мин).",
    },
    {
      title: "Экономичность",
      text: "Замкнутый цикл абразива, низкое энергопотребление.",
    },
    {
      title: "Безопасность",
      text: "Работа в закрытой камере, управление одним оператором. ",
    },
    {
      title: "Универсальность",
      text: "Обработка деталей от мелких (до 15 кг) до крупных (300 кг загрузки).",
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

const DrobometBarabanTip = () => {
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
      model: "УИД-3110",
      voltage: "380/50",
      power: "9.7",
      telpherCount: "1",
      productivity: "1",
      ventilation: "800",
      dimensions: "300",
      widthproduct: "15",
      availability: "Под заказ",
    },
    {
      model: "УИД-3113",
      voltage: "380/50",
      power: "11.1",
      telpherCount: "1",
      productivity: "2",
      ventilation: "2000",
      dimensions: "600",
      widthproduct: "30",
      availability: "Под заказ",
    },
    {
      model: "УИД-320",
      voltage: "380/50",
      power: "7",
      telpherCount: "1*4кВт",
      productivity: "0.3",
      ventilation: "1400",
      dimensions: "50",
      widthproduct: "5",
      availability: "Под заказ",
    },
    {
      model: "УИД-322",
      voltage: "380/50",
      power: "6.4",
      telpherCount: "1*4кВт",
      productivity: "0.5",
      ventilation: "1600",
      dimensions: "80",
      widthproduct: "10",
      availability: "Под заказ",
    },
    {
      model: "УИД-324",
      voltage: "380/50",
      power: "10.85",
      telpherCount: "1*7.5",
      productivity: "0.7",
      ventilation: "2000",
      dimensions: "100",
      widthproduct: "10",
      availability: "Под заказ",
    },
    {
      model: "УИД-326",
      voltage: "380/50",
      power: "13.25",
      telpherCount: "2*7.5кВт",
      productivity: "1.2",
      ventilation: "2500",
      dimensions: "200",
      widthproduct: "10",
      availability: "Под заказ",
    },
    {
      model: "УИД-3210",
      voltage: "380/50",
      power: "28.45",
      telpherCount: "1*15кВт",
      productivity: "2.5",
      ventilation: "4200",
      dimensions: "500",
      widthproduct: "30",
      availability: "Под заказ",
    },
    {
      model: "УИД-3220",
      voltage: "380/50",
      power: "46",
      telpherCount: "2*11кВт",
      productivity: "5",
      ventilation: "5600",
      dimensions: "1000",
      widthproduct: "50",
      availability: "Под заказ",
    },
    {
      model: "УИД-15",
      voltage: "380/50",
      power: "50",
      telpherCount: "1",
      productivity: "6",
      ventilation: "7500",
      dimensions: "1500",
      widthproduct: "250",
      availability: "Под заказ",
    },
    {
      model: "УИД-28",
      voltage: "380/50",
      power: "65",
      telpherCount: "1",
      productivity: "14",
      ventilation: "10500",
      dimensions: "3500",
      widthproduct: "350",
      availability: "Под заказ",
    },
    {
      isColSpan: true,
      text: "Очистка производится со всех сторон",
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
            src="images/DROBEMET_BARABAN_TIP.png"
            alt="Дробемет барабанного типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметная установка барабанного типа</h2>
          <p className="drobemet-description">
            Дробемётные установки барабанного типа серии УИД предназначены для очистки, упрочнения и подготовки поверхностей металлических и неметаллических изделий (чугун, сталь, алюминий, сварные конструкции). Они эффективны для обработки деталей сложной геометрии, крупногабаритных и ударно-чувствительных заготовок.
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Конструкция и принцип работы</h2>
          <p className="drobemet-description">
            Установка оснащена барабаном, формируемым конвейерной лентой (резиновой или стальной), где детали вращаются под воздействием абразива, подаваемого турбиной. Загрузка — ручная или автоматическая. После обработки барабан реверсирует, выгружая заготовки. Система включает: Дробемётную камеру из износостойкой стали;  Турбину, шнековый транспортер, сепаратор; Фильтрацию пыли и блок управления (ПЛК с сенсорным экраном).
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Применение</h2>
          <p className="drobemet-description">
           Установки востребованы в литейных, кузнечных и машиностроительных цехах для очистки отливок, удаления заусенцев и подготовки поверхностей под покрытия. Соответствие мировым стандартам гарантирует работу в экстремальных условиях.
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
                  Максимальная масса загрузки, кг
                </th>
                <th className="table_sm-01">
                  Максимальная масса одного изделия, кг
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
                    <td className="table_sm-01">{row.telpherCount}</td>
                    <td className="table_sm-01">{row.productivity}</td>
                    <td className="table_sm-01">{row.ventilation}</td>
                    <td className="table_sm-01">{row.dimensions}</td>
                    <td className="table_sm-01">{row.widthproduct}</td>
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
        <div className="form-row">
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

export default DrobometBarabanTip;
