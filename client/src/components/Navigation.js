import { Outlet, Link } from "react-router-dom";

const Navigation= () => {

    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Social Media App</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Registration</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>

<Outlet />
</div>

    );
}

export default Navigation;