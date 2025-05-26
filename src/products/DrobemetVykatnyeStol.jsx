import React, { useState, useEffect, useRef } from "react";
import "./product.css";
// Каталог продукция дробометная установка с выкатным столом
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Равномерная очистка",
      text: "Точное позиционирование стола исключает «теневые» зоны, обрабатывая все поверхности.",
    },
    {
      title: "Безопасность и скорость",
      text: "Выкатной стол упрощает загрузку/выгрузку, минимизируя контакт с рабочей зоной.",
    },
    {
      title: "Универсальность",
      text: "Подстраивается под любые размеры и формы — от плоских панелей до объёмных узлов.",
    },
    {
      title: "Обработка крупногабаритных деталей",
      text:  "Подходит для массивных изделий (рамы, плиты), которые невозможно перемещать конвейером.",
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

const DrobemetVykatnyeStol = () => {
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
      model: "УБ-765",
      sizeDetalis: "2000*1000",
      maxWorkpieceWeight: "5000",
      fractionConsumpion: "2*260",
      productivity: "30",
      separatePower: "30",
      ventilation: "11000",
      power: "35,8",
      availability: "Под заказ",
    },
    {
      model: "УБ-7610",
      sizeDetalis: "2500*1500*280",
      maxWorkpieceWeight: "10000",
      fractionConsumpion: "3*260",
      productivity: "45",
      separatePower: "45",
      ventilation: "15000",
      power: "188,45",
      availability: "Под заказ",
    },
    {
      model: "УБ-7620",
      sizeDetalis: "4000*3000*700",
      maxWorkpieceWeight: "20000",
      fractionConsumpion: "4*260",
      productivity: "60",
      separatePower: "60",
      ventilation: "21500",
      power: "183,35",
      availability: "Под заказ",
    },
    {
      model: "УБ-7630",
      sizeDetalis: "4000*2000",
      maxWorkpieceWeight: "30000",
      fractionConsumpion: "4*260",
      productivity: "60",
      separatePower: "60",
      ventilation: "21500",
      power: "83,2",
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
            src=""
            alt="Дробеметная установка с выкатным столом"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметная установка с выкатным столом</h2>
          <p>
            Дробеметные установки с выкатным столом <strong>серии УБ-76</strong> предназначены для работы с изделиями в которых очищаются не все поверхности, крупногабаритными изделиями, тяжелыми частями и отливками, и позволяет удалять различного рода загрязнения в виде оксида и сварки, окалины после термообработки, ржавчины, краски и т.п.
            В данных установках обрабатываются: продукция машиностроения и черной металлургии, кованные изделия, литые изделия.
            В процессе очистки изделия, подбором абразивного материала, создается: необходимая шероховатость для последующего покрытия или покраски, легкая очистка для снятия необходимого слоя, наклеп для упрочнения поверхности.
            Очистка происходит на специальном выкатном рабочем столе, на который загружаются обрабатываемые изделия, далее происходит перемещение стола в дробеметную камеру очистки, в процессе очистки стол вращается внутри камеры, происходит обработка детали со всех сторон, кроме нижней. После первой обработки при необходимости, можно перевернуть детали и запустить установку по второму циклу, уже для полной очистки изделий.
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
                <th className="table_sm-01">Размер обрабатываемой детали, мм</th>
                <th className="table_sm-01">Максимальный вес обрабатываемой детали, кг</th>
                <th className="table_sm-01">Расход дроби, кг/мин</th>
                <th className="table_sm-01">Производительность, т/ч</th>
                <th className="table_sm-01">Отдельная мощность, т/ч</th>
                <th className="table_sm-01">Вентиляция, м3/ч</th>
                <th className="table_sm-01">Мощность, кВт</th>
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
                    <td className="table_sm-01">{row.sizeDetalis}</td>
                    <td className="table_sm-01">{row.maxWorkpieceWeight}</td>
                    <td className="table_sm-01">{row.fractionConsumpion}</td>
                    <td className="table_sm-01">{row.productivity}</td>
                    <td className="table_sm-01">{row.separatePower}</td>
                    <td className="table_sm-01">{row.ventilation}</td>
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

export default DrobemetVykatnyeStol;