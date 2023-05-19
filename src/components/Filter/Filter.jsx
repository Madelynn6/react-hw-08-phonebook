import { useDispatch } from 'react-redux';
import { setInputFilter } from 'redux/contacts/filterSlice';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    const inputValue = e.target.value;
    dispatch(setInputFilter(inputValue));
  };

  return (
    <TextField
      onChange={handleFilter}
      margin="normal"
      id="name"
      label="Name"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      variant="standard"
    />
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filter;
