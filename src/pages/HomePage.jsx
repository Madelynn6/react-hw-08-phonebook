import { Box, Typography } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 4,
        gap: 2,
      }}
    >
      <Typography variant="h3">Welcome to Phonebook!</Typography>
      <WavingHandIcon style={{ fontSize: '100px' }} color="primary" />
    </Box>
  );
};
