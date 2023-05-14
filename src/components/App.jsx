// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/selectors';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    // <Layout>
    //   <div className="form">
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //   </div>

    //   <div className="contact">
    //     <h2>Contacts</h2>
    //     <Filter />
    //     {isLoading && !error && <b>Request in progress...</b>}
    //     <ContactList />
    //   </div>
    // </Layout>
  );
};
export default App;
