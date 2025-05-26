import React, { useState, useEffect, useRef } from "react";
// Каталог продукция дробомет проходного типа типа
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Непрерывность процесса",
      text: "Установки обеспечивают последовательную обработку труб без остановок, так как изделия перемещаются на подвесах через рабочую камеру. Это значительно повышает производительность, особенно при очистке крупных партий труб одинакового диаметра.",
    },
    {
      title: "Универсальность для длинномерных изделий",
      text: "Конструкция подвесного типа идеально подходит для обработки длинных труб (включая магистральные), так как фиксация изделий предотвращает деформацию и гарантирует равномерное воздействие дроби по всей поверхности.",
    },
    {
      title: "Минимизация ручного труда",
      text: "Загрузка, транспортировка и выгрузка труб автоматизированы, что сокращает участие операторов, снижает риск травм и обеспечивает стабильное качество очистки даже при интенсивной работе.",
    },
    {
      title: "Компактность и адаптивность",
      text: "Установки проходного типа занимают меньше места по сравнению с барабанными или камерными аналогами, а их конструкция легко интегрируется в существующие производственные линии для очистки перед сваркой, покраской или монтажом.",
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

const DrobometProhodnogoTipa = () => {
  // Данные для карусели
  const carouselImages = [
    {
      id: 1,
      url: "images-carousel/dpt_photo_2025-05-22_08-52-24.jpg",
    },
    {
      id: 2,
      url: "images-carousel/dpt_photo_2025-05-22_08-52-247.jpg",
    },
    {
      id: 3,
      url: "images-carousel/dpt_photo_2025-05-22_08-52-2409.jpg",
    },
  ];

  // Данные для таблицы
  const tableData = [
    {
      model: "УБ-383",
      volume: "600*1400",
      consumption: "4*260",
      availability: "Под заказ",
    },
     {
      model: "УБ-384",
      volume: "800*1500",
      consumption: "6*260",
      availability: "Под заказ",
    },
     {
      model: "УБ-485",
      volume: "900*1400",
      consumption: "4*260",
      availability: "Под заказ",
    },
     {
      model: "УБ-4810",
      volume: "1000*1500",
      consumption: "6*260",
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
            src="images/DROBEMET_PROHODNOGO_TIPS.png"
            alt="Дробемет барабанного типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметные установки проходные подвесного типа</h2>
          <p className="drobemet-description">
            Дробеметная установка проходная серии УБ с подвесным цепным конвейером О-типа и пылеуловителем предназначена для качественной обработки поверхностей изделий: очистки литья и сварки, подготовки под покрытия, упрочнения изделий, очистка от коррозии и старого лакокрасочного покрытия.
            Дробеметные установки проходные серии УБ разработаны для производств, где необходима высокая производительность  так как имеют минимальное время простоев, кроме того их можно собрать в спаренные машины, и обработке подвергаются большие, массивные детали. Установки могут быть, как привязаны к имеющейся транспортной системе, так и работать как отдельная, самостоятельная единица. Они работают по принципу такта, устанавливается время дробеметного цикла.
            Дробеметная установка проходная серии УБ подходит для обработки больших, массивных и непригодных для обработки навалом деталей, обработки крупногабаритных изделий, большой партии средних и мелких изделий, изделий чувствительных к забоям, сложной геометрической формы. Детали навешиваются на транспортные подвески перед камерой и подаются в установку. 
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
                <th className="table_sm-01">Объем обрабатываемых деталей, мм</th>
                <th className="table_sm-01">Расход дроби, кг/мин</th>
                <th className="table_sm-01">Наличие</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) =>
                row.isColSpan ? (
                  <tr key="note">
                    <td className="table_sm-01" colSpan="4">
                      {row.text}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.model}>
                    <td className="table_sm-01">{row.model}</td>
                    <td className="table_sm-01">{row.volume}</td>
                    <td className="table_sm-01">{row.consumption}</td>
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

export default DrobometProhodnogoTipa;