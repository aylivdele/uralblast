import { useState } from "react";

const PartsTemplate = ({name, description, image}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    file: null,
  });


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
    alert("Ваша заявка отправлена, с вами свяжутся в ближайшее время");
  };

  return (
    <div className="container parts">
      {/* Верхний блок */}
      <div className="top-section">
        <div className="image-block">
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className="text-block">
          <h2 className="mg-2 md-9 mg-7">{name}</h2>
          <p className="parts-description">{description}</p>
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
                <span>Вы можете прикрепить файл или чертеж размером до 20 МБ</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Отправить заявку</button>
      </form>
      </div>

    
    </div>
  );
};

export default PartsTemplate;