import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import CircularComponent from "./CircularComponent";

// supabase backend
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();

  const [formData, setFormdata] = useState({
    teamname: "",
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
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            teamname: formData.teamname,
          },
        },
      });
      navigate("/");
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="signInPage">
      <CircularComponent className="firstCircle" />

      <div className="signInContainer">
        <div className="signInHead">
          <h2>Sign Up</h2>
        </div>

        <form action="">
          <div className="input-div team-name-input">
            <label htmlFor="team-name">Team Name</label>
            <input
              type="text"
              id="team-name"
              name="teamname"
              onChange={handlechange}
              placeholder="Enter your team name"
              required
            />
          </div>

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
              placeholder="******"
              required
            />
          </div>

          <button className="getOtpButton" onClick={handleSubmit}>
            Sign Up
          </button>
          <div classname="signup-option">
            <p>
              Already have account? <a href="/">Sign In</a>
            </p>
          </div>
        </form>
      </div>

      <CircularComponent className="secondCircle" />
    </div>
  );
}
