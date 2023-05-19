import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectInputFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { Button, List, ListItem, ListItemText } from '@mui/material';

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
    <List>
      {filtered.map(el => (
        <ListItem key={el.id} sx={{ display: 'flex', gap: 4 }}>
          <ListItemText primary={el.name} secondary={el.number} />
          <Button
            color="orange"
            name={el.name}
            id={el.id}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  handleChange: PropTypes.func,
};

export default ContactList;
