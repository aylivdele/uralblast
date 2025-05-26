import React, { useState, useEffect, useRef } from "react";
// Каталог продукция дробомет для очистки труб
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Интенсивная очистка",
      text: "Высокая скорость дроби удаляет ржавчину и окалину даже с твёрдых поверхностей.",
    },
    {
      title: "Равномерная обработка",
      text: "Распределение дроби исключает «пропуски» на деталях.",
    },
    {
      title: "Экономичность",
      text: "Износостойкие материалы снижают затраты на ремонт и энергию.",
    },
    {
      title: "Универсальность",
      text: "Регулировка скорости подходит для грубых и деликатных поверхностей.",
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

const Turbine = () => {
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
    model: 'УИТ-7.5',
    power: '7.5',
    abrasiveFlow: '125',
    flangeA: '670',
    flangeB: '140',
    flangeV: '230',
    flangeG: '200',
    flangeD: '275',
    holes: '21',
    rowSpans: {
      flangeA: 1,
      flangeB: 1,
      flangeG: 3,
      flangeD: 3,
      holes: 4
    }
  },
  {
    model: 'УИТ-11',
    power: '11',
    abrasiveFlow: '180',
    flangeA: '150',
    flangeB: '240',
    flangeV: '240', // Добавлено значение
    flangeG: '',    // Оставлено пустым из-за rowSpan
    flangeD: '',    // Оставлено пустым из-за rowSpan
    holes: '',      // Оставлено пустым из-за rowSpan
    rowSpans: {
    flangeA: 2,
    flangeB: 2,
    flangeG: 2,
    flangeD: 2,
    holes: 2
  }
  },
  {
    model: 'УИТ-15',
    power: '15',
    abrasiveFlow: '250',
    flangeV: '',
    flangeG: '', 
    flangeD: '', 
    holes: ''       
  },
  {
    model: 'УИТ-18',
    power: '22',
    abrasiveFlow: '360',
    flangeA: '645',
    flangeB: '173',
    flangeV: '258',
    flangeG: '100 или 190',
    flangeD: '370 или 190',
    holes: ''
  }
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
            src="/images/TURBINE_TYPES.png"
            alt="Дробемет барабанного типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметный аппарат (Турбина)</h2>
          <p className="drobemet-description">
            Имеет небольшой размер, небольшой вес, простоту установки и обслуживания. Его расположение и углы установки отработаны с помощью трехмерного динамического компьютерного моделирования, чтобы гарантировать оптимальную эффективность дробеметной обработки деталей.
            Дробеметный аппарат конструктивно состоит из асинхронного электродвигателя, стального корпуса аппарата, в котором закреплено рабочее колесо (импеллер) с лопатками, распределителя, направляющей и трубы подачи дроби. Привод от электродвигателя на вал непосредственно или посредством ременно-клиновой передачи. Корпус аппарата изнутри футерован заменяемыми вкладышами, изготовленными из никель-хромистого износостойкого чугуна. Лопатки дробеметной аппарата также отлиты из стойкого к абразивному износу хромового твердого чугуна. 
            Дробеметные лопатки вставляются от центра рабочего колеса и центрируются при вращении под действием центробежной сила, нет никакой необходимости в каких-либо зажимных приспособлениях. Специальный профиль лопаток позволяет за счет вращения рабочего колеса (импеллера) с очень большой скоростью (~2450 об/мин) создавать центробежную силу, обеспечивающую разгон и выброс дроби со скоростью до 75 м/с. Смена лопаток в турбине занимает не более 15 минут.
          </p>
        </div>
      </div>
      <div className="">
        <h2>Эффективные характеристики дробеметных аппаратов</h2>
        <p> Износостойкие лопатки обеспечивают лучшее распределение абразива, увеличивают зону обработки и уменьшают воздействие абразива на стенки камеры между обрабатываемыми изделиями. <br />
            Более высокая скорость подачи позволяет использовать абразивные частицы меньшего размера и тем самым существенно сократить износ оборудования. <br />
            Более высокая скорость перемещения частиц абразива сокращает производственный цикл. <br />
            Для более легких деталей требуется меньше энергии. <br />
            Возможность регулирования скорости подачи абразивного материала. <br />
            Возможность регулирования направления подачи абразивного материала для обеспечения максимально эффективной очистки.
        </p>
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
        <th className="table_sm-01" rowSpan="2">Модель</th>
        <th className="table_sm-01" rowSpan="2">Мощность (кВт)</th>
        <th className="table_sm-01" rowSpan="2">Поток абразива (кг/мин)</th>
        <th className="table_sm-01" colSpan="6">Размер соединительного фланца</th>
      </tr>
      <tr>
        <th className="table_sm-01">А</th>
        <th className="table_sm-01">Б</th>
        <th className="table_sm-01">В</th>
        <th className="table_sm-01">Г</th>
        <th className="table_sm-01">Д</th>
        <th className="table_sm-01">Ø отверстий</th>
      </tr>
    </thead>
    
    <tbody>
      {tableData.map((row, index) => {
        const prevRow = index > 0 ? tableData[index - 1] : null;
        
        // Проверка на rowSpan предыдущей строки
        const isFlangeAHidden = prevRow?.rowSpans?.flangeA > 1;
        const isFlangeBHidden = prevRow?.rowSpans?.flangeB > 1;
        const isFlangeGHidden = prevRow?.rowSpans?.flangeG > 1;
        const isFlangeDHidden = prevRow?.rowSpans?.flangeD > 1;
        const isHolesHidden = prevRow?.rowSpans?.holes > 1;

        return (
          <tr key={index}>
            <td className="table_sm-01">{row.model}</td>
            <td className="table_sm-01">{row.power}</td>
            <td className="table_sm-01">{row.abrasiveFlow}</td>
            
            {/* Фланец А */}
            {!isFlangeAHidden && row.flangeA !== '' && (
              <td 
                className="table_sm-01" 
                rowSpan={row.rowSpans?.flangeA || 1}
              >
                {row.flangeA || ''}
              </td>
            )}
            
            {/* Фланец Б */}
            {!isFlangeBHidden && row.flangeB !== '' && (
              <td 
                className="table_sm-01" 
                rowSpan={row.rowSpans?.flangeB || 1}
              >
                {row.flangeB || ''}
              </td>
            )}
            
            {/* Фланец В */}
            <td className="table_sm-01" >
              {row.flangeV === '' ? '' : row.flangeV}
            </td>
            
            {/* Фланец Г */}
            {!isFlangeGHidden && row.flangeG !== '' && (
              <td 
                className="table_sm-01" 
                rowSpan={row.rowSpans?.flangeG || 1}
              >
                {row.flangeG || ''}
              </td>
            )}
            
            {/* Фланец Д */}
            {!isFlangeDHidden && row.flangeD !== '' && (
              <td 
                className="table_sm-01" 
                rowSpan={row.rowSpans?.flangeD || 1}
              >
                {row.flangeD || ''}
              </td>
            )}
            
            {/* Отверстия */}
            {!isHolesHidden && row.holes !== '' && (
              <td 
                className="table_sm-01" 
                rowSpan={row.rowSpans?.holes || 1}
              >
                {row.holes === '—' ? '' : row.holes}
              </td>
            )}
          </tr>
        );
      })}
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

export default Turbine;