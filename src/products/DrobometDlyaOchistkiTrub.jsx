import React, { useState, useEffect, useRef } from "react";
// Каталог продукция дробомет для очистки труб
const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Высокая эффективность очистки",
      text: "Дробеметные установки быстро и тщательно удаляют ржавчину, окалину, старые покрытия и загрязнения с поверхности труб, обеспечивая идеальную подготовку для нанесения защитных составов, сварки или дальнейшей обработки.",
    },
    {
      title: "Автоматизация и экономия времени",
      text: "Процесс полностью механизирован, что сокращает зависимость от ручного труда, ускоряет обработку и снижает эксплуатационные затраты. Это особенно выгодно при работе с большими партиями труб.",
    },
    {
      title: "Равномерность обработки",
      text: "Установки обеспечивают однородное воздействие на всю поверхность трубы, исключая риск «пропусков» или повреждения материала. Это повышает качество финального продукта и продлевает срок службы труб.",
    },
    {
      title: "Экологичность и безопасность",
      text: "В отличие от химической очистки, дробеметный метод не требует токсичных реагентов, сокращает вредные выбросы и минимизирует риск для здоровья работников. Кроме того, дробь часто можно использовать повторно, снижая отходы.",
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

const DrobometDlyaOchistkiTrub = () => {
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
      model: "УИДТ-20",
      pipeDiametr: "60-114",
      flactionFlow: "2*250",
      productivity: "1-1.5",
      availability: "Под заказ",
    },
    {
      model: "УИДТ-30",
      pipeDiametr: "70-300",
      flactionFlow: "2*250",
      productivity: "1.5-2",
      availability: "Под заказ",
    },
    {
      model: "УИДТ-50",
      pipeDiametr: "150-800",
      flactionFlow: "2*280",
      productivity: "1.5-2",
      availability: "Под заказ",
    },
    {
      model: "УИДТ-100",
      pipeDiametr: "350-1000",
      flactionFlow: "4*250",
      productivity: "1-1.5",
      availability: "Под заказ",
    },
    {
      model: "УИДТ-150",
      pipeDiametr: "до 1500",
      flactionFlow: "2*250",
      productivity: "1-1.5",
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
            src="/images/DROBEMET_DLYA_OCHISTHI_TRUB_TIPS.png"
            alt="Дробемет барабанного типа"
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">Дробеметные установки для очистки труб</h2>
          <p className="drobemet-description">
            Проходная дробеметная установка серии УИДТ предназначена для обработки наружной поверхности труб, кузнечных заготовок и других изделий цилиндрической формы. В результате дробеметной обработки значительно улучшается структура поверхности обрабатываемых деталей. На изделиях с обработанной поверхностью облегчаются и ускоряются процессы резки и сварки изделий, многократно увеличивается срок службы защитных покрытий.
            В комбинации с камерой предварительного нагрева, покрасочной установкой и камерой сушки дробеметная установка серии УИДТ может быть расширена до комплексной линии консервации. Также возможна интеграция в существующие технологические линии.
            Трубы загружаются на входной роликовый конвейер с коническими роликами или дисками для большого диаметра труб. Ролики смонтированы под определённым углом, что позволяет одновременно продвигать и вращать трубы в процессе транспортировки. Таким образом трубы транспортируются через туннель машины, по краям которого расположены дробеметные турбины, с помощью которых очищается внешняя поверхность труб. После процесса обработки, оставшийся на трубах абразивный материал попадает в бункер и снова возвращается в свой замкнутый цикл. 
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
                <th className="table_sm-01">Диаметр трубы, мм</th>
                <th className="table_sm-01">Поток дроби, кг/мин</th>
                <th className="table_sm-01">Производительность, м/мин</th>
                <th className="table_sm-01">Наличие</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) =>
                row.isColSpan ? (
                  <tr key="note">
                    <td className="table_sm-01" colSpan="5">
                      {row.text}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.model}>
                    <td className="table_sm-01">{row.model}</td>
                    <td className="table_sm-01">{row.pipeDiametr}</td>
                    <td className="table_sm-01">{row.flactionFlow}</td>
                    <td className="table_sm-01">{row.productivity}</td>
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

export default DrobometDlyaOchistkiTrub;