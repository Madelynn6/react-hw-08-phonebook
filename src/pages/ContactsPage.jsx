import { Box, CircularProgress, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>
        <Typography variant="h5" sx={{ mt: 4 }} textAlign="center">
          To add a contact, enter a name and a number:
        </Typography>
        <ContactForm />
      </div>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" textAlign="center">
          Find contact by name:
        </Typography>
        <Filter />

        <div>{isLoading && !error && <CircularProgress />}</div>
        <ContactList />
      </Box>
    </>
  );
};
