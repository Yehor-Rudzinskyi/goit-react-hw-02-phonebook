import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className="contact-list-item">
            {name}: <span>{number}</span>
            <button
              type="button"
              onClick={() => onDelete(id)}
              className="contact-list-deleteButton"
            >
              Delete
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
