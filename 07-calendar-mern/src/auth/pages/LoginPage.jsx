import { useState } from "react";
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../layout";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginPage = () => {

  const [ showPassword, setShowPassword ] = useState(false);

  const HandleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <>
      <AuthLayout title="Sing In">
        <form>
          <Grid container>
            <Grid item sx={{ pb: 4 }} xs={12} >
              <TextField
                label='Your email'
                type="email"
                placeholder="Email@email.com"
                fullWidth
                variant="standard"
                sx={{ color: 'white.main' }}
              />
            </Grid>

            <Grid item sx={{ pb: 4 }} xs={12} >
              <TextField
                label='Password'
                type={showPassword ? 'text' : 'password'}
                fullWidth
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle-adornment-Visibility"
                        onClick={HandleClickShowPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                }}
                variant="standard"
              />
            </Grid>

            <Grid container>
              <Grid item xs={12} sm={6} >
                <Button fullWidth variant="contained" sx={{ backgroundColor: 'blueDark.main', borderRadius: 6, mb: 2 }}>
                  Sing In
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ fontSize: 14, color: 'blueLight.main' }}>
                Do not have an account? Sing Up!!
              </Typography>
            </Grid>

          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
