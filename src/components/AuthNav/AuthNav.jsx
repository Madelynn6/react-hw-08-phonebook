import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Button
        component={NavLink}
        to="/register"
        color="white"
        variant="outlined"
      >
        Sign up
      </Button>
      <Button component={NavLink} to="/login" color="white" variant="outlined">
        Sign in
      </Button>
    </div>
  );
};
