import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import InputMask from 'react-input-mask';
import './ContactForm.scss';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSetName = e => {
    setName(e.target.value);
  };
  const handleSetNumber = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="id-3" className="form-label">
        Name
        <input
          id="id-3"
          type="text"
          value={name}
          onChange={handleSetName}
          className="form-input-name"
          maxLength="13"
        />
      </label>
      <label htmlFor="id-2" className="form-label">
        Number
        <InputMask
          id="id-2"
          type="tel"
          mask="+3\80 99 999 99 99"
          value={number}
          onChange={handleSetNumber}
          className="form-input-number"
        />
      </label>
      <button type="submit" className="add-button">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propeTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
