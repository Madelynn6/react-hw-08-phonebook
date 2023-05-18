import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
