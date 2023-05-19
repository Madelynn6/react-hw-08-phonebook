import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import { AccountCircle } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexGrow: 0, gap: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AccountCircle />
        <Typography variant="caption" display="block">
          {user.name}
        </Typography>
      </Box>
      <Button
        color="white"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};
