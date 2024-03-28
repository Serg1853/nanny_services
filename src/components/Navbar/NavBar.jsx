import {
  AppBar,
  Button,
  Container,
  Grid,
  OutlinedInput,
  Toolbar,
} from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container justifyContent={'flex-end'}>
            <Button variant={OutlinedInput}>LogIn</Button>
            <Button variant={OutlinedInput}>LogOut</Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
