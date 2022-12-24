import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={css.contact__info}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.contact__delete__btn}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;