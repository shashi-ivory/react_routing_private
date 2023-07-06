import React, { useState } from "react";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCPasswordError] = useState("");

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // Clear the corresponding error when input is changed
    switch (e.target.name) {
      case "name":
        setNameError("");
        break;
      case "email":
        setEmailError("");
        break;
      case "phone":
        setPhoneError("");
        break;
      case "password":
        setPasswordError("");
        break;
      case "cpassword":
        setCPasswordError("");
        break;
      default:
        break;
    }
  };

  const handleSignUp = () => {
    let hasError = false;

    if (user.name.trim() === "") {
      setNameError("Name is required!");
      hasError = true;
    }

    if (user.email.trim() === "") {
      setEmailError("Email is required!");
      hasError = true;
    }

    if (user.phone.trim() === "") {
      setPhoneError("Phone is required!");
      hasError = true;
    }

    if (user.password.trim() === "") {
      setPasswordError("Password is required!");
      hasError = true;
    }

    if (user.cpassword.trim() === "") {
      setCPasswordError("Confirm Password is required!");
      hasError = true;
    }

    if (user.cpassword.trim() !== user.password.trim()) {
      setCPasswordError("Passwords do not match!");
      hasError = true;
    }

    if (!hasError) {
      // Perform sign up logic
      console.log("Sign up successful");
      // Reset the form
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleOnChange}
        />
        {nameError && <p>{nameError}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleOnChange}
        />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleOnChange}
        />
        {phoneError && <p>{phoneError}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleOnChange}
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="cpassword"
          value={user.cpassword}
          onChange={handleOnChange}
        />
        {cpasswordError && <p>{cpasswordError}</p>}
      </div>
      <button type="button" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
