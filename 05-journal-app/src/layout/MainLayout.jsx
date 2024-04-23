import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../shared/components";

const drawerWidth = 240;

export const MainLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box 
        component='main'
        sx={{flexGrow: 1, p:3}}
      >

        <Toolbar />

        {children}

      </Box>

      {/* Footer */}

    </Box>

  )
}
