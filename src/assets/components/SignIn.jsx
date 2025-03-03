import React, { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import googleLogo from "../resources/googleLogo.svg";
import CircularComponent from "./CircularComponent";

// supabase backend
import { supabase } from "../../client";
import { Navigate } from "react-router-dom";

export default function SignInPage({ setToken }) {
  let navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  // function to handlechange
  function handlechange(event) {
    setFormdata((x) => {
      return {
        ...x,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }
      if (data) {
        setToken(data);
        navigate("home");
      }
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="signInPage">
      <CircularComponent className="firstCircle" />

      <div className="signInContainer">
        <div className="signInHead">
          <h2>Sign In</h2>
        </div>

        <form action="">
          <div className="input-div email-input">
            <label htmlFor="email">Email</label>
            <input
              onChange={handlechange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-div email-input">
            <label htmlFor="password">Password</label>
            <input
              onChange={handlechange}
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>

          <button className="getOtpButton" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
        <form>
          <div className="signup-option">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      <CircularComponent className="secondCircle" />
    </div>
  );
}
