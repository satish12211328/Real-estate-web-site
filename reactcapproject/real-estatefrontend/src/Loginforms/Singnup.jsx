import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import boy from "../Images/4939473e84994cd638a8211337bfd40f.png"
import Login from "../Loginforms/Login"
import "./Singnup.css"
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    let isValid = true;

    
    if (!username.trim()) {
      newErrors.username = "Please enter your username.";
      isValid = false;
    }


    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

   
    if (!password.trim()) {
      newErrors.password = "Please enter your password.";
      isValid = false;
    }

  
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      
      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          alert(data.message);
        } else {
          setErrors(data.errors || {});
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "whitesmoke",
        flexDirection: "column",
      }}
    >
      <div
        className="bg-container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2 className="text-center mt-4" style={{marginBottom:"140px"}}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{marginBottom:"180px"}}>
          <div className="form-group" >
            <label htmlFor="username" >Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <div className="invalid-feedback">{errors.username}</div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          </div>

          <NavLink to="/Login"><button type="submit" className="btn btn-dark btn-block">Sign up </button></NavLink>
         
        </form>

        <div className="text-center mt-3">
          <p>
            Already have an account? <NavLink to="/Login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
