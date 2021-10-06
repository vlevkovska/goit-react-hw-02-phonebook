import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';

const ContactsEl = ({ name, number, id, onDeleteContact }) => (
  <div className={ce.box}>
    <p>{name}</p>
    <p>: {number}</p>
    <button
      className={ce.btn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Remove
    </button>
  </div>
);
ContactsEl.propTypes = {
  onDeleteContact: PropTypes.func,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactsEl;
