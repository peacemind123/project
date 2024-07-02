import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, Alert } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../main";
import UserContext from "../../context/userContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { createSession } = useContext(UserContext);
  const [input, setInput] = useState({username: '', password: ''})
  const [error, setError] = useState("");

  const updateInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!(input.username && input.password)) {
      setError('Please enter username and password');
      return false;
    }
    try {
      const result = await fetchData("/user/login", input, "POST");
      if (result) {
        setError("");
        createSession({
          authenticated: true,
          username: result.username,
          id: result._id
        })
        navigate("/profile");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>UI</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {
            error && (
              <Alert severity="error">{error}</Alert>
            )
          }
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={updateInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={updateInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}