import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleOnSubmit = newContacts => {
    if (
      contacts.find(
        ({ name, number }) =>
          newContacts.name === name || newContacts.number === number,
      )
    )
      return;
    setContacts(prevState => [newContacts, ...prevState]);
  };
  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = value => {
    setFilter(value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleOnSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
