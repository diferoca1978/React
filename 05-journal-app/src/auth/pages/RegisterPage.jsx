import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../layout"





export const RegisterPage = () => {
  return (
    <>
    <AuthLayout title="Register">
      <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{pb: 2}}>
              <TextField 
              label='Name' 
              type="text" 
              placeholder="Insert full name"
              fullWidth
              variant="standard"/>
            </Grid>

            <Grid item xs={ 12 } sx={{pb: 2}}>
              <TextField 
              label='Mail' 
              type="email" 
              placeholder="mail@Mail.com"
              fullWidth
              variant="standard"/>
            </Grid>

            <Grid item xs={ 12 } sx={{pb: 2}}>
              <TextField 
              label='Password' 
              type="password" 
              placeholder="Password"
              fullWidth
              variant="standard"/>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2 }}>
              
              <Grid item xs={ 12 } sm={ 6 } >
                <Button variant="contained" sx={{fontSize: 20, borderRadius: 8}}fullWidth>
                  <Typography sx={{mr:1, fontSize: 18}}>Register</Typography>
                </Button>
              </Grid>
              
              
            </Grid>

            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{
                fontSize: 18,
                mr: 1
              }}>Do you already have an account?</Typography>
              <Link 
              component={ RouterLink } 
              color='inherit' 
              to='/auth/login' 
              sx={{
                textDecoration: 'none', 
                cursor:'pointer',
                fontSize: 18,
                '&:hover': {color: 'blues.main'}
              }}
              >¡Sig in!</Link>
            </Grid>
          </Grid>
      </form>

    </AuthLayout>
    </>
  )
}
