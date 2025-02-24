import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Login.css"
import boy from "../Images/4939473e84994cd638a8211337bfd40f.png"
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Login successful!');
    } else {
      setError(data.message || 'Login failed');
    }
  };

  return (
    <div>
       <div className='Navrbar'>
              <div className='subnavlogo'>
                  <img src={"https://cdn.dribbble.com/userupload/12684044/file/original-e782c45d2bd0e4632a88bafb1e206f0e.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center"} alt='logo' id="im"></img>
                  <h3>FlatFinder</h3>
              </div>
              <div className='subnavdetail'>
          <ul id='navdetail'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/form">Upload Houses</NavLink></li>
              <li><NavLink to="/savedrooms">Saved Rooms</NavLink></li>
              <li id='navl4'><NavLink to="/Singnup">Login</NavLink></li>
              <li id='navl5'><NavLink to="/images"></NavLink></li>
          </ul>
          <img src={boy}></img>
      </div>
    </div>
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <NavLink to="/"><button type="submit">Login</button></NavLink>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
