import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Loginform from './components/Loginform.js';
import Navigation from './components/Navigation.js';
import Registration from './components/Registration.js';
import Profile from './components/Profile.js';


function App() {
  return (
    <div className="App">
      <h1 id="headerid"><b>UI Project !!</b></h1>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={ <Navigation />}>
      
              <Route path="login" element={<Loginform />}/>
              
              <Route path="register" element={<Registration />}/>

              <Route path="profile" element={<Profile />}/>
              
              </Route>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;