import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';

import './AdminLogin.css';

const AdminLogin = () => {
  const [adminUsername, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  //const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fleet-backend-eta.vercel.app/api/admins/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminUsername, password }),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        sessionStorage.setItem('adminUsername', adminUsername);
        // Redirect to the driver dashboard
        history.push('/Admin/Home') ;// Assuming the driver dashboard route is "/driver"
        console.log("Logged in:", data);
        window.alert("login seccessfull");
      } else {
        // Login failed
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-login-container">
      <form className="login-table" onSubmit={handleLogin}>
        <h1>admin Login</h1>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="username">Username:</label></td>
              <td><input type="text" id="username" value={adminUsername} onChange={handleUsernameChange} required/></td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td><input type="password" id="password" value={password} onChange={handlePasswordChange} required/></td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Login</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AdminLogin;
