import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Products from "./Components/Pages/Products";
import MenuBar from "./Components/Pages/MenuBar";
import Protected from "./Components/Authpage/Protected";
import SignUp from "./Components/Authpage/SignUp";
import Login from "./Components/Authpage/Login/Login";
import Otp from "./Components/Authpage/Otp";
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signin = () => {
    setIsSignedIn(true);
  };
  const signout = () => {
    setIsSignedIn(false);
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      <BrowserRouter>
        <MenuBar isSignedIn={isSignedIn} />
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="Otp" element={<Otp />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          {isSignedIn ? (
            <Route
              path="/products"
              element={
                <Protected isSignedIn={isSignedIn}>
                  <Products />
                </Protected>
              }
            />
          ) : (
            <Route path="/signup" element={<SignUp />} />
          )}
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Products />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}
