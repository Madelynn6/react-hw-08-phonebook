import { useAuth } from 'hooks/useAuth';

import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button component={NavLink} to="/" variant="body2">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" variant="body2">
          Contacts
        </Button>
      )}
    </Box>
  );
};
