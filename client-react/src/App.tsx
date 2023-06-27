import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" color="primary" gutterBottom>
        Welcome to Material-UI Website
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        Start building your Material-UI website!
      </Typography>
    </Container>
  );
}

export default App;
