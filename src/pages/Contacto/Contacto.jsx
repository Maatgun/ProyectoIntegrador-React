import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
const [messageSent, setMessageSent] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
        newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'El correo electrónico es inválido';
    }


    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.length < 3) {
        newErrors.name = 'El nombre debe tener al menos 3 caracteres';
        }

    if (!formData.message.trim()) {
        newErrors.message = 'El mensaje es obligatorio';
        } else if (formData.message.length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
            }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formulario enviado:', formData);
        e.target.reset();
        setFormData({ name: '', email: '', message: '' });
        setMessageSent(true);
    } else {
      console.log('Formulario inválido. Corrige los errores antes de enviar.');
    }
  };


  return (
      
    <>
    <h1>Contacto</h1>
  
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>

      <button type="submit">Enviar</button>
      {messageSent && <p>Gracias por tu mensaje. Nos pondremos en contacto contigo lo antes posible.</p>}
    </form>
    
    </>
  );
};

export default ContactForm;
