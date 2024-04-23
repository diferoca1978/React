import { Link as RouterLink } from "react-router-dom";
import { Google, LoginRounded } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../layout";



export const LoginPage = () => {
  return (

    <AuthLayout title="Login">

      <form>
        <Grid container>
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
              <Button variant="contained" fullWidth>
                <Typography sx={{mr:1, fontSize: 18}}>Login</Typography>
                <LoginRounded sx={{ fontSize: 18}}/>
              </Button>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 6 } >
              <Button variant="contained" fullWidth>
                <Google sx={{ fontSize: 18}}/>
                <Typography sx={{ml: 1, fontSize: 18}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' >
            <Link 
            component={ RouterLink } 
            color='inherit' 
            to='/auth/register' 
            sx={{
              fontSize: 18,
              textDecoration: 'none',
              cursor:'pointer',
              '&:hover': {color: 'blues.main'}  
            }}
            >Create an Account</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>

  )
}
