import { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const fileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 20 * 1024 * 1024) {
      toast('Максимальный размер файла составляет 20 МБ!', {type: 'warning', theme: 'colored'});
      fileRef.current.value = null;
      return;
    }
    setFormData({ ...formData, file });
  };

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

    data.append("subject", "Заявка");
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
    <form ref={formRef} className="contact-block-form appear section" id='contact-form' action={handleSubmit}>
      <h2>Интересует наше оборудование? Оставьте заявку и мы перезвоним</h2>
      <div className="form-block-row">
        <div className="form-group">
          <input
            ref={nameRef}
            id='name'
            name='name'
            type="text"
            placeholder="Введите ваше имя"
          />
        </div>
        <div className="form-group">
          <input
            ref={phoneRef}
            id='phone'
            name='phone'
            type="tel"
            placeholder="Введите номер телефона"
          />
        </div>
        <div className="form-group">
          <input
            ref={emailRef}
            id='email'
            name='email'
            type="email"
            placeholder="Введите ваш Email"
          />
        </div>
      </div>

      <div className="form-row-combined">
        <div className="form-group">
          <textarea
            id='message'
            name='message'
            placeholder="Введите что вас интересует"
            rows="5"
          />
        </div>

        <div className="form-group">
          <div className="file-upload">
            <input ref={fileRef} type="file" onChange={handleFileChange} id="fileInput" name='fileInput'/>
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