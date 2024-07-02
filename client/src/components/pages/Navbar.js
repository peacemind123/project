import React, {useContext} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Container} from '@mui/material';
import { Outlet, Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";


export default function Navbar() {

  const navigate = useNavigate();

  const { user, logoutUser }= useContext(UserContext);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UI Project
            </Typography>
            <Box sx={{ 
              display: { xs: 'none', sm: 'block' },
              '& a': {
                color: 'white',
                textDecoration: 'none'
              }, 
            }}>
  
              {
                user.authenticated ? (
                  <>
                    <Button sx={{ color: '#fff' }}>
                      <Link to="/profile">Profile</Link>
                    </Button>
                    <Button sx={{ color: '#fff' }} onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ):(
                  <>
                    <Button sx={{ color: '#fff' }}>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )
              }
            </Box>
          </Toolbar>
        </AppBar>
        <Outlet user={user}/>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, padding: '10px 0' }}>
          
        </AppBar>
      </Box>
    </Container>
    
  );
}