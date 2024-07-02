
import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Alert } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../main";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({username: '', password: '', email: ''})
  const [error, setError] = useState("");

  const updateInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!(input.username && input.password && input.email)) {
        setError('Please enter username, password and email');
        return false;
    }
    try {
      const result = await fetchData("/user/register", input , "POST");
      if (result) {
        setError("");
        navigate("/login");
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
          Sign Up
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            onChange={updateInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Alredy have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}