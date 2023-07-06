import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Redirect to dashboard
      navigate.push("/Dashboard");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPassError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (email === "abc@gmail.com") {
      isValid = true;
      setEmailError("");
    } else if (email === "") {
      setEmailError("Email is required!");
      isValid = false;
    } else if (password === "1234") {
      isValid = true;
      setPassError("");
    } else if (password === "") {
      setPassError("Password is required!");
      isValid = false;
    } else {
      alert("Login Successful");
      // return isValid;
    }

    return isValid;
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="input"
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
        />
        {passError && <span style={{ color: "red" }}>{passError}</span>}
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
