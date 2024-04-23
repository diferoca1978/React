import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const BlueTheme = createTheme({
  palette: {
    primary:{
      main: '#edf2f4'
    },
    secondary:{
      main:'#219EBC'
    },
    error:{
      main: red.A400
    },
    blues: {
      main: '#219ebc',
      light: '#8ecae6'

    }

  }
})
