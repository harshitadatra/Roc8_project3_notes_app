import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"
export const Signup = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const changeHandler = (e) => {
    setUserSignUp((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const signUpClickHandler = async () => {
    console.log(userSignUp)
    try {
      const signUpData = await axios.post("/api/auth/signup", userSignUp);
      console.log(signUpData);
      setUser({
        users: signUpData.data.createdUser,
        token: signUpData.data.encodedToken,
      });
      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
  };
   
  return (
    <>
      <Navbar />
      <div class="signup-container">
        <div class="sign-up-header">Sign Up</div>
        <input
          class="first-name-input"
          type="text"
          name="firstName"
          placeholder="enter your email id"
          onChange={(e) => changeHandler(e)}
        />
        <input
          class="last-name-input"
          type="text"
          placeholder="enter your password"
          onChange={(e) => changeHandler(e)}
          name="lastName"
        />
        <input
          class="email-input"
          type="email"
          placeholder="enter your email name"
          onChange={(e) => changeHandler(e)}
          name="email"
        />
        <input
          class="password-input"
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={(e) => changeHandler(e)}
        />
        <button onClick={signUpClickHandler} class="signup-container-button">
          Signup
        </button>
      </div>
    </>
  );
}

