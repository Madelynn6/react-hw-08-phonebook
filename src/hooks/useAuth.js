import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { selectError } from 'redux/contacts/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    user,
    error,
  };
};
