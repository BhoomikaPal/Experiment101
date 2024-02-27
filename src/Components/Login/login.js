import './login.css';
import profile from "../Assets/a.png";
import email from "../Assets/email.jpg";
import pass from "../Assets/pass.png";
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., send data to backend API)
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div className="input-group">
            <i className="fas fa-user" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-button">
          <button>Login</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}

export default Login;