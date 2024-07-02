
import './App.css';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Navbar from './components/pages/Navbar';
import Profile from './components/pages/Profile';
import { UserProvider } from './context/userContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <BrowserRouter>
          <UserProvider>
            <Routes>
                <Route path='/' element={<Navbar />}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="profile" element={<Profile />} />
              
                </Route>
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
