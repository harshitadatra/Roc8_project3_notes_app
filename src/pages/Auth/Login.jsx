import React,{useState} from 'react'
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../../context/auth-context';
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Login = () => {
    const [userDetail,setUserDetail] = useState({email:"",password:""});
    const {user,setUser} = useAuth();
    const navigate = useNavigate();
    const changeHandler = (e) =>
    {
        const {name,value} = e.target
        
        setUserDetail((prev) => ({...prev,[name]: value}))

    }
     const loginHandler = async () => {
       try {
         const response = await axios.post("/api/auth/login", userDetail);
        //  console.log(response);
         setUser({
           users: response.data.foundUser,
           token: response.data.encodedToken,
         });

         navigate("/notes");

        //  console.log(response.data.foundUser);
       } catch (error) {
         console.log(error.response);
       }
     };
        //  console.log(user);

  

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-header">Login</div>
        <input
          name="email"
          value={userDetail.email}
          className="email-input"
          type="email"
          placeholder="enter you email id"
          onChange={(e) => changeHandler(e)}
        />
        <input
          name="password"
          value={userDetail.password}
          className="password-input"
          type="password"
          placeholder="enter you password"
          onChange={(e) => changeHandler(e)}
        />
        <button className="login-container-button" onClick={loginHandler}>
          Login
        </button>

        <button className="login-container-test">
          Login with test credentials
        </button>
        <div className="signup-message">
          Dont have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}

