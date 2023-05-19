import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { Box, Button, Container, TextField } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    e.target.reset();
  };
  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoFocus
          variant="standard"
        />
        <TextField
          margin="normal"
          required
          id="number"
          label="Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="orange"
        >
          Add contact
        </Button>
      </Box>
    </Container>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default ContactForm;
