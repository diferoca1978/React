import { Link as RouterLink } from "react-router-dom";
import { Google, LoginRounded } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const LoginPage = () => {
  return (
    <Grid 
    container 
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >

    <Grid item
    className="box-shadow"
    xs= { 3 }
    sx={{backgroundColor:'white', padding: 3, borderRadius: 2, border: 1, borderColor: 'blues.main'}}>
      <Typography variant="h5">Login</Typography>

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
              <Button variant="contained" sx={{fontSize: 20}}fullWidth>
                <Typography sx={{mr:1}}>Login</Typography>
                <LoginRounded/>
              </Button>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 6 } >
              <Button variant="contained" fullWidth>
                <Google sx={{ fontSize: 20}}/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' >
            <Link 
            component={ RouterLink } 
            color='inherit' 
            to='/' 
            sx={{textDecoration: 'none', cursor:'pointer'}}
            >Create an Account</Link>
          </Grid>

        </Grid>
      </form>


    </Grid>


    </Grid>
  )
}
