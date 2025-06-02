import { useState } from "react";
import ContactForm from "./ContactForm";
import Breadcrumbs from "./Breadcrumbs";

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
      <Breadcrumbs name={name}/>
      {/* Верхний блок */}
      <div className="top-section from-left">
        <div className="image-block">
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className="text-block from-right">
          <h2 className="mg-2 md-9 mg-7">{name}</h2>
          <p className="parts-description">{description}</p>
        </div>
      </div>

      <ContactForm />

    
    </div>
  );
};

export default PartsTemplate;