import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormName, FormNumber, FormButton } from "./ContactForm.styled";
import { addContact } from '../redux/slice';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormName>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Z]+([' -]?[a-zA-Z ])*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </FormName>
      <FormNumber>
        <label>Number:</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}  
          pattern="[+]?[0-9-()\\s]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormNumber>
      <FormButton type="submit">Add Contact</FormButton>
    </Form>
  );
}
