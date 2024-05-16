import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google, LoginRounded } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../../layout";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticated = useMemo(() => status === "cheking", [ status ]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSigIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ pb: 2 }}>
            <TextField
              label="Mail"
              type="email"
              placeholder="mail@Mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sx={{ pb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={12} display={!errorMessage ? "none" : ""}>
            <Alert severity="error" sx={{ borderRadius: 8, mb: 3 }}>
              {errorMessage}
            </Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography sx={{ mr: 1, fontSize: 18 }}>Login</Typography>
                <LoginRounded sx={{ fontSize: 18 }} />
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                onClick={onGoogleSigIn}
                variant="contained"
                fullWidth
              >
                <Google sx={{ fontSize: 18 }} />
                <Typography sx={{ ml: 1, fontSize: 18 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/register"
              sx={{
                fontSize: 18,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { color: "blues.main" },
              }}
            >
              Create an Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
