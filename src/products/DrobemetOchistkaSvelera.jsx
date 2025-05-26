import React, { useState, useEffect, useRef } from "react";
import "./product.css";
// Дробемет для очистки швеллера двутавра и сорта 
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Очистка сложных геометрических профилей",
      text: "Установки эффективно удаляют загрязнения, окалину и ржавчину с поверхностей швеллеров, двутавров и сортового проката, включая труднодоступные места (углы, полки, внутренние рёбра), сохраняя целостность металла.",
    },
    {
      title: "Универсальность для разных типов металлопроката",
      text: "Система настраивается под размеры и форму изделий (от мелкого сорта до крупногабаритных балок), что позволяет обрабатывать разнообразные профили без переналадки оборудования.",
    },
    {
      title: "Повышение адгезии покрытий",
      text: "Равномерная абразивная обработка создаёт оптимальную шероховатость поверхности, что улучшает сцепление с красками, грунтами и антикоррозийными составами, продлевая срок службы конструкций.",
    },
    {
      title: "Сокращение времени подготовки к монтажу",
      text: "Автоматизированный процесс ускоряет очистку перед сваркой, сборкой или отгрузкой, снижая простои в производстве и минимизируя необходимость ручной доработки.",
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

const DrobemetOchistkaSvelera = () => {
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
      model: "УБ-1500/1000",
      partsProcessing: "1200*800*12000",
      sizeWindow: "1500*1000",
      powerTurbine: "11/15 кВт",
      turbineCount: "6",
      powerDust: "14000/15 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "800",
      power: "Примерно 80-85кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-1500/1200",
      partsProcessing: "1200*1000*12000",
      sizeWindow: "1500*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "6",
      powerDust: "14000/15 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "800",
      power: "Примерно 80-85кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-1700/1200",
      partsProcessing: "1400*1000*12000",
      sizeWindow: "1700*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "21500/22 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "800",
      power: "Примерно 80-85кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-1900/1000",
      partsProcessing: "1600*800*12000",
      sizeWindow: "1900*1000",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "21500/22 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "800",
      power: "Примерно 110-130кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-1900/1200",
      partsProcessing: "1600*1000*12000",
      sizeWindow: "1900*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "21500/22 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1000",
      power: "Примерно 110-130кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2300/1200",
      partsProcessing: "2000*1000*12000",
      sizeWindow: "2300*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "21500/22 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1000",
      power: "Примерно 110-130кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2300/1400",
      partsProcessing: "2000*1200*12000",
      sizeWindow: "2300*1400",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "21500/22 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1000",
      power: "Примерно 110-130кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2500/1000",
      partsProcessing: "2200*800*12000",
      sizeWindow: "2500*1000",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "29800/30 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1000",
      power: "Примерно 125-135кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2500/1200",
      partsProcessing: "2200*1000*12000",
      sizeWindow: "2500*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "8",
      powerDust: "29800/30 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1500",
      power: "Примерно 125-135кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2500/1400",
      partsProcessing: "2200*1200*12000",
      sizeWindow: "2500*1400",
      powerTurbine: "11/15 кВт",
      turbineCount: "10",
      powerDust: "29800/30 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1500",
      power: "Примерно 125-135кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-2800/1200",
      partsProcessing: "2500*1000*12000",
      sizeWindow: "2800*1200",
      powerTurbine: "11/15 кВт",
      turbineCount: "10",
      powerDust: "29800/30 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "1500",
      power: "Примерно 125-135кВт",
      availability: "Под заказ",
    },
    {
      model: "УБ-3800/1700",
      partsProcessing: "3500*1500*12000",
      sizeWindow: "3800*1700",
      powerTurbine: "11/15 кВт",
      turbineCount: "12",
      powerDust: "36500/37 кВт",
      feedRate: "0.5-2.0",
      maximumWeidth: "2000",
      power: "Примерно 125-135кВт",
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
            src="/images/DROBEMET_DLYA_OCHISTKI_DVYTAVRA_I_SVELERA_TIPS.png"
            alt="Дробемет кранового типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметные установки для очистки швеллера,двутавра и сорта</h2>
          <p>
            Дробеметная установка проходная серии УБ, с роликовыми конвейерами (рольгангом), с пылеуловителем, разработана в качестве оптимального решения для обработки швеллера, двутавра и сорта, профилей, изделий произвольной формы: очистки литья и сварки, подготовки под покрытия, упрочнения изделий, очистка от коррозии и старого лакокрасочного покрытия, с обработкой отложений абразивным воздействием дробеструйной очистки, с помощью системы обдува и обработки щетками, что обеспечивает полное удаление всех следов.
            В комбинации с камерой предварительного нагрева, покрасочной установкой и камерой сушки рольганговая дробеметная установка серии УБ может быть расширена до комплексной линии консервации. Также возможна интеграция в существующие технологические линии.
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Рольганги</h2>
          <p>
            В зависимости от характеристик обрабатываемых деталей (длина, размеры) для их перемещения предлагаются рольганговые транспортеры в различном исполнении. Могут варьироваться расстояние между роликами и их диаметр. Благодаря модульной конструкции рольганга его монтаж проводится довольно просто и легко. Приводной мотор располагается в нижней части рольганга для защиты от повреждений.
            Посредством роликовой системы транспортировки совместно с соответствующими узлами поперечной транспортировки, отдельные производственные процессы, как, например, струйная обработка, консервация, резка, сверление, окраска и т.д. могут быть объединены между собой в единую производственную цепь. Благодаря этому обеспечивается гибкий производственный процесс и высокий объём выпускаемой продукции.
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
                <th className="table_sm-01">Обработка детали Ш*В*Д (мм)</th>
                <th className="table_sm-01">Размер окна</th>
                <th className="table_sm-01">Мощность турбин КВТ/КГ</th>
                <th className="table_sm-01">К-во турбиш, шт</th>
                <th className="table_sm-01">Мощность пылеуловителя кВт/М<sup>3</sup></th>
                <th className="table_sm-01">
                  Скорость подачи заготовки м/мин
                </th>
                <th className="table_sm-01">
                  Максимальный вес детали кг/метр
                </th>
                <th className="table_sm-01">
                  Примерная общая мощность кВт
                </th>
                <th className="table_sm-01">Наличие</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) =>
                row.isColSpan ? (
                  <tr key="note">
                    <td className="table_sm-01" colSpan="10">
                      {row.text}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.model}>
                    <td className="table_sm-01">{row.model}</td>
                    <td className="table_sm-01">{row.partsProcessing}</td>
                    <td className="table_sm-01">{row.sizeWindow}</td>
                    <td className="table_sm-01">{row.powerTurbine}</td>
                    <td className="table_sm-01">{row.turbineCount}</td>
                    <td className="table_sm-01">{row.powerDust}</td>
                    <td className="table_sm-01">{row.feedRate}</td>
                    <td className="table_sm-01">{row.maximumWeidth}</td>
                    <td className="table_sm-01">{row.power}</td>
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

export default DrobemetOchistkaSvelera;