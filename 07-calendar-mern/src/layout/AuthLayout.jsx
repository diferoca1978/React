import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', padding: 4, backgroundColor: 'white.main' }}
      >
        <Grid item
          xs={3}
          sx={{
            backgroundColor: "white.main",
            boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
            padding: 3,
            borderRadius: 6,
            border: 2,
            borderColor: "blueDark.light",
            width: { md: 450 },
          }}
        >
          <Typography variant="h5" sx={{ color: 'blueDark.dark', pb: 2 }}>{title}</Typography>

          {children}
        </Grid>

      </Grid>
    </>
  )
}
