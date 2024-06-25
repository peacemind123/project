import {useState } from "react";
const Loginform= () => {
    const [user, setUser ] = useState({
        username: " ",
        password: " "
    });
    const { username, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    return (
        <div class="logindetails" id="login">
        <form>    
<div class="logindetails" id="login">
          <label htmlFor="username" style={{paddingRight: "10px"}} className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
<div class="logindetails" id="login">
          <label htmlFor="password" style={{paddingRight: "10px"}} className="form-label">Password</label>
          <input 
            type="text" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
                <button class="btn-1"><b>login</b></button>
                <br></br><br></br>
                <input type="checkbox" value="para"></input>
                
                <label for="para">keep me login</label>
                <br></br><br></br>
                <p>Don't have an account, Please register here &nbsp;<a href="register.html" >Register</a></p>
                </form>
</div>

);
}

export default Loginform;