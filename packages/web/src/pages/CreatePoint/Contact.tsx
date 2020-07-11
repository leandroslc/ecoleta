import React, { ChangeEvent } from 'react';
import { Field, FieldGroup } from '../../components';

export interface ContactData {
  name: string;
  email: string;
  whatsapp: string;
}

interface ContactProps {
  contactData: ContactData;
  setContactData: (formData: ContactData) => void;
}

const Contact = (props: ContactProps) => {
  const { contactData, setContactData } = props;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setContactData({ ...contactData, [name]: value });
  }

  return (
    <>
      <Field
        as="input"
        label="Nome da entidade"
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
      />
      <FieldGroup>
        <Field
          as="input"
          label="E-mail"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        <Field
          as="input"
          label="Whatsapp"
          type="text"
          id="whatsapp"
          name="whatsapp"
          onChange={handleChange}
        />
      </FieldGroup>
    </>
  );
};

export default Contact;
