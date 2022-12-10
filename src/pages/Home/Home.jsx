import React from 'react';
import sourceImg from "../../assets/img1.png";
import { Navbar } from '../../components/Navbar/Navbar';
import "../../App.css"

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
          <button className ="sign-up-button"> Sign-up</button>
          <div className ="login-link">Already have an account? login</div>
        </div>
      </div>
    </>
  );
}

