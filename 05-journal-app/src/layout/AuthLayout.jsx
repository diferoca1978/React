import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__slow"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 4,
          border: 1,
          borderColor: "blues.main",
          width: { md: 450 },
        }}
      >
        <Typography variant="h5">{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
