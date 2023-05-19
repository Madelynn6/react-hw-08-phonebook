import { useAuth } from 'hooks/useAuth';

import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      <Button component={NavLink} to="/" color="orange" variant="contained">
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          color="orange"
          variant="contained"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
