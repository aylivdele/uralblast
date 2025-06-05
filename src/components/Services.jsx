import { useState, useRef } from "react";
import { toast } from "react-toastify";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isLoading, setIsLoading] = useState(false); 

  const formRef = useRef(null);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const servicesData = [
    {
      icon: "images/icons-services_1.png",
      title: "Ремонт и сервисное обслуживание дробеметов",
      description: [
        "Дробемет - это оборудование, которое изнашивает само себя, а в процессе осуществляет очистку Ваших деталей. Своевременный ремонт и замена запасных частей является основой для бесперебойной работы Вашего дробеметного оборудования.",
        "Наша компания имеет штат опытных технических специалистов которые могут осуществить сервисное обслуживание дробеметов любых типов и производителей, наличие своего склада запасных частей облегчает им задачу. Услуга действует на территории РФ, Беларуси и Казахстана.",
        'Мы запустили услугу "специалист на час", наш представитель выезжает к Вам на предприятие в течении 48 часов с момента обращения и осуществляет текущий ремонт Вашего дробемета.',
      ],
    },
    {
      icon: "images/icons-services_2.png",
      title: "Капитальный ремонт и модернизация дробеметов",
      description: [
        "Капитальный ремонт позволяет восстановить работоспособность оборудования до исходных характеристик. Мы проводим полную диагностику, замену изношенных узлов и модернизацию устаревших систем.",
        "Наши инженеры внедряют современные решения для повышения производительности и снижения энергопотребления вашего оборудования.",
        "После капремонта вы получаете оборудование с обновленным техническим паспортом и гарантией 12 месяцев.",
      ],
    },
    {
      icon: "images/icons-services_3.png",
      title:
        "Обучение персонала эксплуатирующего и обслуживающего дробеметное оборудование",
      description: [
        "Проводим теоретическое и практическое обучение ваших сотрудников работе с дробеметными системами.",
        "Программа обучения включает: основы работы оборудования, технику безопасности, ежедневное обслуживание и диагностику неисправностей.",
        "По окончании курса выдается сертификат установленного образца.",
      ],
    },
    {
      icon: "images/icons-services_4.png",
      title: "Технический аудит дробеметного и дробеструйного оборудования",
      description: [
        "Комплексная проверка технического состояния оборудования с составлением подробного отчета.",
        "В аудит входит: оценка износа компонентов, анализ эффективности работы, рекомендации по модернизации.",
        "По результатам аудита вы получаете план профилактических работ и рекомендации по оптимизации процессов.",
      ],
    },
  ];

  const handleSubmit = (data) => {
    if (!data.get("name") || !data.get("phone") || !data.get("email")) {
      if (!data.get("name")) {
        nameRef.current.classList.add('empty')
      }
      if (!data.get("phone")) {
        phoneRef.current.classList.add('empty')
      }
      if (!data.get("email")) {
        emailRef.current.classList.add('empty')
      }
      toast('Пожалуйста, заполните все обязательные поля', {type: 'warning', theme: 'colored'});
      return;
    }
    nameRef.current.classList.remove('empty')
    phoneRef.current.classList.remove('empty')
    emailRef.current.classList.remove('empty')
    setIsLoading(true);

    data.append("subject", "Cервисная помощь");
    fetch('/api.php', { method: 'POST', body: data})
      .then(result => {
        if (result.status < 300) {
          toast("Запрос успешно отправлен!", {type: 'info', theme: 'colored'});
        } else {
          throw new Error(result);
        }
        if (result.body) {
          result.text().then(text => console.log("Form submitted:", text))
        } else {
          console.log("Form submitted:", result);
        }
      })
      .catch(reason => {
        toast('Ошибка при отправке запроса! Пожалуйста, попробуйте позже. Также вы можете связаться используя телефон или почту.', {type: 'error', theme: 'colored', autoClose: false});
        console.error("Form submition error:", reason);
      })
      .finally(() => {
        formRef.current.reset();
        setIsLoading(false);
      });
    
  };

  return (
    <div className="services-container-plus section" id="services">
      <section className="services-section">
        <h2>Наши услуги</h2>

        <div className="services-container">
          <div className="services-list">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`from-left service-item ${
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
                  <p key={i} className="from-right">{text}</p>
                ))}
              </div>
            </div>

            <div className="contact-form-advantes section from-right" id='service-form'>
              <h2>Нужна сервисная помощь? Свяжитесь с нами</h2>
              <form ref={formRef} action={handleSubmit}>
                <div className="form-row-advantes">
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Введите ваше имя*"
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Введите ваш Email*"
                  />
                </div>
                <div className="form-row-advantes">
                  <input
                    ref={phoneRef}
                    type="tel"
                    name="phone"
                    placeholder="Введите ваш телефон*"
                  />
                  <button type="submit" disabled={isLoading}>Отправить</button>
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