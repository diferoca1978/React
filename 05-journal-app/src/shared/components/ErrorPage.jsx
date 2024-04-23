import { Home } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import { NavLink as RouterLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

  const error = useRouteError();

  return (
    <Box sx={{display:"flex", justifyContent:'center' }}>
      <Box
        sx={{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p:4
        }}>
        <Box>
          <img src="../../images/404.png" alt="error" />
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection: 'column',
          alignItems:'center'
        }}>
          <Typography variant="h4">Oops!!</Typography>
          <Typography variant="subtitle1">Sorry, an unexpected error has ocurred</Typography>
          <Typography variant="subtitle1">
            <Typography component='i' sx={{mb:1}}>{error.statusText || error.message}</Typography>
          </Typography>
          <Button variant="contained" sx={{borderRadius: 4}}>
             <Link component={RouterLink} to='/home' sx={{
              textDecoration:'none',
              fontSize: 16,
              color: 'black',
              }}>Go Home </Link>
              <Home sx={{fontSize:20, ml: 1, color:'blues.main'}}/>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}