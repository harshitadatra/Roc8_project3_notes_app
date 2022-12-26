import React from 'react';
import sourceImg from "../../assets/img1.png";
import { Navbar } from '../../components/Navbar/Navbar';
import "../../App.css";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Navbar/>
      <div className ="main-container">
        <div className ="image-container">
          <img alt="main" className ="img" src= {sourceImg}/>
        </div>
        <div className ="description-container">
          <div className ="description">
            Dump all you notes so that in keep notes . so that you dont forget
            about it
          </div>
          <Link to="/signup" className="sign-up-button">
            Sign-up
          </Link>
          <Link to="/login" className="login-link">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </>
  );
}

