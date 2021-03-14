import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
            <button type="button" onClick={() => onDelete(id)}>
              X
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
};

export default ContactList;
