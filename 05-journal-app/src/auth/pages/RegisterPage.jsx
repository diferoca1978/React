import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../../layout";
import { startRegisterWithEmailAndPassword } from "../../store/auth";
// import { useForm } from "../../hooks/useForm";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
};

const schema = z.object({
  displayName: z
    .string()
    .min(1, { message: "Name is required" })
    .max(30, { message: "Field must contain max 30 characters" }),
  email: z
    .string()
    .email({ message: "Must be a valid Email" })
    .trim()
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const RegisterPage = () => {
  // const { displayName, email, password, onInputChange, formState } =
  //   useForm(initialValues);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  const { errorMessage, status } = useSelector((state) => state.auth);
  const isChekingAuthentication = useMemo(() => status === "cheking", [status]);

  const onSubmit = (data) => {
    dispatch(startRegisterWithEmailAndPassword(data));
  };

  return (
    <>
      {/* <AuthLayout title="Register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                label="Name"
                type="text"
                placeholder="Insert full name"
                fullWidth
                variant="standard"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
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
                value={email}
                onChange={onInputChange}
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
                value={password}
                onChange={onInputChange}
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
                  <Typography sx={{ mr: 1, fontSize: 18 }}>Register</Typography>
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
      </AuthLayout> */}

      <AuthLayout title="Register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                label="Name"
                type="text"
                placeholder="Insert full name"
                fullWidth
                variant="standard"
                {...register("displayName")}
                error={!!errors.displayName}
                helperText={errors.displayName?.message}
              />
            </Grid>

            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                label="Mail"
                type="email"
                placeholder="mail@Mail.com"
                fullWidth
                variant="standard"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                variant="standard"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={12} display={!errorMessage ? "none" : ""}>
                <Alert sx={{ borderRadius: 8 }} severity="error">
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isChekingAuthentication}
                  type="submit"
                  variant="contained"
                  sx={{ fontSize: 20, borderRadius: 8 }}
                  fullWidth
                >
                  <Typography sx={{ mr: 1, fontSize: 18 }}>Register</Typography>
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
      </AuthLayout>
    </>
  );
};
