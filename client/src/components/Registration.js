import { useState } from "react";
import { fetchData } from "../main.js";
import { useNavigate } from "react-router-dom";


const Registration= () => {
    const navigate = useNavigate();
    
        const [user, setuser ] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    });
    const {firstname,lastname,username,password} = user;

const onChange =(e) => setuser({...user,[e.target.name]: e.target.value})

const onSubmit =(e) => {

    e.preventDefault();
    

    fetchData("/user/register",

        
    {
      username,
      password
    },
    "POST")

   .then((data) => {
    if(!data.message){

        console.log(data);
      navigate("/Profile")
    }

   })
.catch((error)=>{
})
}


    return (
<div className="registerdetails" id="registration">
      <form onSubmit={onSubmit}>
        <div className="registerdetails" id="registration">
          <label htmlFor="firstname" style={{paddingRight: "10px"}} className="form-label">Firstname</label>
          <input 
            type="text" 
            className="form-control" 
            id="firstname"
            name='firstname'
            onChange={onChange}
            value={firstname}
            required
          />
        </div>
<div className="registerdetails" id="registration">
          <label htmlFor="lastname" style={{paddingRight: "10px"}} className="form-label">Lastname</label>
          <input 
            type="text" 
            className="form-control" 
            id="lastname"
            name='lastname'
            onChange={onChange}
            value={lastname}
            required
          />
        </div>
        <div className="registerdetails" id="registration">
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
        <div className="registerdetails" id="registration">
        <label htmlFor="password" style={{paddingRight: "10px"}} className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
);
}

export default Registration;