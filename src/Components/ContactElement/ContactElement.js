import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';

const ContactsEl = ({ name, number, id, onDeleteContact }) => (
  <li className={ce.box}>
    <span>{name}:</span>
    <span>{number}</span>
    <button
      className={ce.btn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Remove
    </button>
  </li>
);
ContactsEl.propTypes = {
  onDeleteContact: PropTypes.func,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactsEl;
