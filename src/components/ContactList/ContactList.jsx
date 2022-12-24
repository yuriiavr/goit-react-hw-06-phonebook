import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import * as counterSelectors from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(counterSelectors.contacts);
  const filter = useSelector(counterSelectors.filter);

  const checkedContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul className={css.contact__list}>
      {checkedContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__list__item}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;