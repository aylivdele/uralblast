import { useState } from "react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const servicesData = [
    {
      icon: "https://i.postimg.cc/rm2szdkT/1.png",
      title: "Ремонт и сервисное обслуживание дробеметов",
      description: [
        "Дробемет - это оборудование, которое изнашивает само себя, а в процессе осуществляет очистку Ваших деталей. Своевременный ремонт и замена запасных частей является основой для бесперебойной работы Вашего дробеметного оборудования.",
        "Наша компания имеет штат опытных технических специалистов которые могут осуществить сервисное обслуживание дробеметов любых типов и производителей, наличие своего склада запасных частей облегчает им задачу. Услуга действует на территории РФ, Беларуси и Казахстана.",
        'Мы запустили услугу "специалист на час", наш представитель выезжает к Вам на предприятие в течении 48 часов с момента обращения и осуществляет текущий ремонт Вашего дробемета.',
      ],
    },
    {
      icon: "https://i.postimg.cc/XYJQhZt2/2.png",
      title: "Капитальный ремонт и модернизация дробеметов",
      description: [
        "Капитальный ремонт позволяет восстановить работоспособность оборудования до исходных характеристик. Мы проводим полную диагностику, замену изношенных узлов и модернизацию устаревших систем.",
        "Наши инженеры внедряют современные решения для повышения производительности и снижения энергопотребления вашего оборудования.",
        "После капремонта вы получаете оборудование с обновленным техническим паспортом и гарантией 12 месяцев.",
      ],
    },
    {
      icon: "https://i.postimg.cc/vZzN7k0d/3.png",
      title:
        "Обучение персонала эксплуатирующего и обслуживающего дробеметное оборудование",
      description: [
        "Проводим теоретическое и практическое обучение ваших сотрудников работе с дробеметными системами.",
        "Программа обучения включает: основы работы оборудования, технику безопасности, ежедневное обслуживание и диагностику неисправностей.",
        "По окончании курса выдается сертификат установленного образца.",
      ],
    },
    {
      icon: "https://i.postimg.cc/8z4W2MhG/4.png",
      title: "Технический аудит дробеметного и дробеструйного оборудования",
      description: [
        "Комплексная проверка технического состояния оборудования с составлением подробного отчета.",
        "В аудит входит: оценка износа компонентов, анализ эффективности работы, рекомендации по модернизации.",
        "По результатам аудита вы получаете план профилактических работ и рекомендации по оптимизации процессов.",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log("Form submitted:", formData);
    // Очистка формы после отправки
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="services-container-plus" id="services">
      <section className="services-section">
        <h2>Наши услуги</h2>

        <div className="services-container">
          <div className="services-list">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`service-item ${
                  selectedService === index ? "active" : ""
                }`}
                onClick={() => setSelectedService(index)}
              >
                <img
                  src={service.icon}
                  alt={`Иконка услуги ${index + 1}`}
                  className="service-icon"
                />
                <div className="text">{service.title}</div>
              </div>
            ))}
          </div>

          <div className="service-right">
            <div className="service-content">
              <div className="content-block active">
                {servicesData[selectedService].description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>

            <div className="contact-form-advantes">
              <h3>Нужна сервисная помощь? Свяжитесь с нами</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row-advantes">
                  <input
                    type="text"
                    name="name"
                    placeholder="Введите ваше имя*"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Введите ваш Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row-advantes">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Введите ваш телефон*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <button type="submit">Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;