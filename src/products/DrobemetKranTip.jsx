import React, { useState, useEffect, useRef } from "react";
import "./product.css";
// Каталог продукция дробомет кранового типа
const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        {question}
        <span className="arrow" />
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
    question: 'Что делает ваши установки уникальными?',
    answer:
      'lorem ipsum'
  },
  {
    question: 'Какие преимущества перед конкурентами?',
    answer:
      'lorem ipsum.'
  },
  {
    question: 'Как ваше оборудование экономит бюджет?',
    answer:
      'lorem ipsum.'
  },
  {
    question: 'Есть ли гарантия на оборудование?',
    answer:
      'lorem ipsum.'
  },
   {
    question: 'Можно ли адаптировать установку под наши задачи?',
    answer:
      'lorem ipsum.'
  },
  {
    question: 'Как обеспечивается безопасность операторов?',
    answer:
      'lorem ipsum.'
  },
   {
    question: 'Как быстро окупится оборудование?',
    answer:
      'lorem ipsum.'
  },
  {
    question: 'Как ваши установки влияют на экологию?',
    answer:
      'lorem ipsum.'
  },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq-container">
      <h2>Вопросы и ответы</h2>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(prev => prev === index ? null : index)}
        />
      ))}
    </div>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Универсальность",
      text: "Обработка деталей любой формы и размеров (до 1200 мм в высоту, 800 мм в диаметре).",
    },
    {
      title: "Экономичность",
      text: "Замкнутый цикл абразива, низкое энергопотребление, отсутствие необходимости в фундаменте.",
    },
    {
      title: "Надёжность",
      text: "Модульная конструкция упрощает монтаж и ремонт (например, замена лопаток турбины — 15 минут).",
    },
    {
      title: "Безопасность",
      text: "Автоматизация процессов, работа в закрытой камере, управление одним оператором.",
    },
    {
      title: "Производительность",
      text: "До 6 т/час за счёт параллельной обработки несколькими тельферами (грузоподъёмность до 1000 кг каждый).",
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

const DrobemetKranTip = () => {
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
      model: "УИД-376",
      voltage: "380/50",
      power: "24.9",
      telpherCount: "1",
      turbineCount: "2*7.5 кВт",
      load: "500",
      productivity: "6",
      ventilation: "5200",
      dimensions: "800/1200",
      availability: "Под заказ",
    },
    {
      model: "УИД-376Е",
      voltage: "380/50",
      power: "24.9",
      telpherCount: "2",
      turbineCount: "2*7.5 кВт",
      load: "1000",
      productivity: "6",
      ventilation: "5200",
      dimensions: "800/1200",
      availability: "Под заказ",
    },
    {
      model: "УИД-378",
      voltage: "380/50",
      power: "41.35",
      telpherCount: "1",
      turbineCount: "2*11 кВт",
      load: "2000",
      productivity: "12",
      ventilation: "10500",
      dimensions: "1000/1500",
      availability: "Под заказ",
    },
    {
      model: "УИД-378Е",
      voltage: "380/50",
      power: "41.35",
      telpherCount: "2",
      turbineCount: "2*11 кВт",
      load: "1000",
      productivity: "12",
      ventilation: "10500",
      dimensions: "1000/1500",
      availability: "Под заказ",
    },
    {
      model: "УИД-3710",
      voltage: "380/50",
      power: "49.35",
      telpherCount: "1",
      turbineCount: "2*15 кВт",
      load: "2000",
      productivity: "12",
      ventilation: "11000",
      dimensions: "1200/1600",
      availability: "Под заказ",
    },
    {
      model: "УИД-3710Е",
      voltage: "380/50",
      power: "50",
      telpherCount: "2",
      turbineCount: "2*15 кВт",
      load: "5000",
      productivity: "30",
      ventilation: "11000",
      dimensions: "1200/1600",
      availability: "Под заказ",
    },
    {
      model: "УИД-3720",
      voltage: "380/50",
      power: "68",
      telpherCount: "1",
      turbineCount: "3*15 кВт",
      load: "5000",
      productivity: "30",
      ventilation: "15000",
      dimensions: "1500/2000",
      availability: "Под заказ",
    },
    {
      model: "УИД-3720Е",
      voltage: "380/50",
      power: "68",
      telpherCount: "2",
      turbineCount: "3*15 кВт",
      load: "2000",
      productivity: "30",
      ventilation: "15000",
      dimensions: "1500/2000",
      availability: "Под заказ",
    },
    {
      model: "УИД-3750",
      voltage: "380/50",
      power: "102.2",
      telpherCount: "1",
      turbineCount: "4*15 кВт",
      load: "10000",
      productivity: "60",
      ventilation: "18000",
      dimensions: "2000/2500",
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
            src="/images/DROBEMET_KRAN_TIPS.png"
            alt="Дробемет кранового типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметная установка кранового типа</h2>
          <p>
            Дробемётные установки кранового типа серии УИД — стационарные
            автоматизированные системы для поверхностной обработки металлических
            деталей потоком абразива. Они применяются в литейном и
            машиностроительном производствах для очистки литья, сварных
            конструкций, упрочнения деталей, удаления заусенцев и подготовки
            поверхностей под покрытия.
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Конструкция и принцип работы</h2>
          <p>
            Установка включает дробемётную камеру с износостойкой защитой
            (марганцевая сталь, резина), турбины для разгона абразива, систему
            рециркуляции (бункеры, элеватор, сепаратор), фильтрацию пыли и
            панель управления на базе ПЛК с сенсорным экраном. Обработка
            выполняется в закрытой камере: детали подвешиваются на крюк,
            вращаются под струями абразива, что обеспечивает равномерную очистку
            всех поверхностей. Абразив (стальная дробь) циклично подаётся,
            сепарируется от отходов и повторно используется. Пыль удаляется
            фильтрами с механизмом встряхивания.
          </p>
          <h2 className="text-block-h2 mg-2 md-9 mg-7">Применение</h2>
          <p>
            Установки оптимальны для крупногабаритных, сложных по геометрии и
            ударно-чувствительных деталей (рамы, спирали). Возможна адаптация
            под индивидуальные требования заказчика. Соответствие мировым
            стандартам позволяет использовать их в сложных условиях (литейные,
            кузнечные цеха).
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
                <th className="table_sm-01">К-во тельферов</th>
                <th className="table_sm-01">К-во турбин</th>
                <th className="table_sm-01">Нагрузка на тельфер, кг</th>
                <th className="table_sm-01">
                  Расчетная производительность т/час
                </th>
                <th className="table_sm-01">
                  Производительность вентиляции, м3/час
                </th>
                <th className="table_sm-01">
                  Диаметр очищаемого изделия, длина/высота, мм
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
                    <td className="table_sm-01">{row.voltage}</td>
                    <td className="table_sm-01">{row.power}</td>
                    <td className="table_sm-01">{row.telpherCount}</td>
                    <td className="table_sm-01">{row.turbineCount}</td>
                    <td className="table_sm-01">{row.load}</td>
                    <td className="table_sm-01">{row.productivity}</td>
                    <td className="table_sm-01">{row.ventilation}</td>
                    <td className="table_sm-01">{row.dimensions}</td>
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

      <Faq />

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

export default DrobemetKranTip;
