import { useSelector } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth);
  console.log(photoURL);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Avatar
            alt="Diego Rodriguez"
            src="photoURL"
            sx={{ marginRight: 2, bgcolor: blue[800] }}
          />
          {displayName !== null ? <Typography>{displayName}</Typography> : ""}
        </Toolbar>
        <Divider />

        <List>
          {["enero", "febrero", "abril", "marzo"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>

                <Grid container direction="column">
                  <ListItemText primary={text} />
                  <ListItemText secondary={"Sint eu sunt incididunt."} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
