import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';

export const AppMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <ContactPhoneIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            color="orange"
          />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHONEBOOK
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
