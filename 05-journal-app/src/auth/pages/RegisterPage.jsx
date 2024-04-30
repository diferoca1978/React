import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Formik } from "formik";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../layout";
import { RegisterValidations } from "./validations";
import { startCreatingUserByEmailPassword } from "../../store/auth";
// import { useForm } from "../../hooks/useForm";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
};

export const RegisterPage = () => {
  // const {displayName, email, password, onInputChange, formState} = useForm( formData );

  // const onSubmit = (event) => {
  //   event.preventDefault();
  // };

  const dispatch = useDispatch(startCreatingUserByEmailPassword(initialValues));

  return (
    <>
      <AuthLayout title="Register">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterValidations}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            touched,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Insert full name"
                    fullWidth
                    variant="standard"
                    name="displayName"
                    value={values.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.displayName && touched.displayName}
                    helperText={
                      errors.displayName &&
                      touched.displayName &&
                      errors.displayName
                    }
                  />
                </Grid>

                <Grid item xs={12} sx={{ pb: 2 }}>
                  <TextField
                    label="Mail"
                    type="email"
                    placeholder="mail@Mail.com"
                    fullWidth
                    variant="standard"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>

                <Grid item xs={12} sx={{ pb: 2 }}>
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Password"
                    fullWidth
                    variant="standard"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ fontSize: 20, borderRadius: 8 }}
                      fullWidth
                    >
                      <Typography sx={{ mr: 1, fontSize: 18 }}>
                        Register
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                  <Typography
                    sx={{
                      fontSize: 18,
                      mr: 1,
                    }}
                  >
                    Do you already have an account?
                  </Typography>
                  <Link
                    component={RouterLink}
                    color="inherit"
                    to="/auth/login"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: 18,
                      "&:hover": { color: "blues.main" },
                    }}
                  >
                    ¡Sig in!
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </AuthLayout>
    </>
  );
};
