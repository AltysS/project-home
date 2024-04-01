"use client";
import React, { useState } from "react";
import Input from "../input/Input";
import styles from "./contactUsSection.module.scss";
import TextArea from "../textArea/TextArea";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // В этой функции можно обработать отправку данных формы
    console.log("Form Data:", formData);
  };

  return (
    <section className={styles.container}>
      <h2>Связаться с нами</h2>
      <div>
        <div className={styles.imageContainer}>
          <img src="./contactus.png" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            onChange={handleChange}
            value={formData.name}
          />
          <Input
            type="number"
            name="phoneNumber"
            placeholder="Номер телефона"
            required={true}
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            required={true}
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            type="text"
            name="interest"
            placeholder="Интересующий товар/услуга"
            onChange={handleChange}
            value={formData.interest}
          />
          <TextArea
            type="text"
            name="message"
            placeholder="Сообщение"
            height="150px"
            required={true}
            onChange={handleChange}
            value={formData.message}
          />
          <div className={styles.checkboxWrapper}>
            <Checkbox required={true} />
            <p>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
          <div>
            <Button
              type="submit"
              text="Отправить"
              background="#333333"
              color="#FFFFFF"
              arrowColor="#FFFFFF"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
