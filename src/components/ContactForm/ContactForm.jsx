import { useState } from 'react';
import shortid from 'shortid';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        {' '}
        Name
        <input type="text" value={name} onChange={handleSetName} />
      </label>
      <label htmlFor="">
        {' '}
        Number
        <input type="text" value={number} onChange={handleSetNumber} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
