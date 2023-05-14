import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectInputFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectInputFilter);
  const filtered = contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  const handleDelete = e => {
    const idToDelete = e.target.id;
    dispatch(deleteContact(idToDelete));
  };

  return (
    <ul>
      {/* {contacts.items.map(el => ( */}
      {filtered.map(el => (
        <li key={el.id} className={css.li}>
          <p className={css.text}>{el.name}</p>
          <p className={css.text}>{el.phone}</p>

          <button
            name={el.name}
            id={el.id}
            onClick={handleDelete}
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  handleChange: PropTypes.func,
};

export default ContactList;
