import { useState } from 'react';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    file: null
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 20 * 1024 * 1024) {
      alert("Файл слишком большой! Максимум 20 МБ");
      return;
    }
    setFormData({ ...formData, file });
  };

  const handleSubmit = (data) => {
    if (!data.get("name") || !data.get("phone") || !data.get("email") || !data.get("message")) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }
    setIsLoading(true);

    data.append("subject", "Заявка");
    fetch('/api.php', { method: 'POST', body: data})
      .then(result => {
        if (result.body) {
          result.text().then(text => console.log("Form submitted:", text))
        } else {
          console.log("Form submitted:", result);
        }
      })
      .catch(reason => console.error("Form submition error:", reason))
      .finally(() => {
        setFormData({});
        setIsLoading(false);
      });
  };

  return (
    <form className="contact-block-form appear section" id='contact-form' action={handleSubmit}>
      <h2>Интересует наше оборудование? Оставьте заявку и мы перезвоним</h2>
      <div className="form-block-row">
        <div className="form-group">
          <input
            id='name'
            name='name'
            type="text"
            placeholder="Введите ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            id='phone'
            name='phone'
            type="tel"
            placeholder="Введите номер телефона"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            id='email'
            name='email'
            type="email"
            placeholder="Введите ваш Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row-combined">
        <div className="form-group">
          <textarea
            id='message'
            name='message'
            placeholder="Введите что вас интересует"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="5"
          />
        </div>

        <div className="form-group">
          <div className="file-upload">
            <input type="file" onChange={handleFileChange} id="fileInput" name='fileInput'/>
            <label htmlFor="fileInput">
              <span>Вы можете прикрепить файл или чертеж весом до 20 МБ</span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" disabled={isLoading}>Отправить заявку</button>
    </form>
  );
};

export default ContactForm;