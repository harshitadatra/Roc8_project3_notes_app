import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
// import { useCart } from '../../context/notes-context';

export const Navbar = () => {
  const {user,setUser} = useAuth();
  const navigate = useNavigate();
   const logoutHandler = () => {
     setUser({ token: null });
     navigate("/");
     
   };
  return (
    <>
      <div class="nav-container">
        <div class="brand-name">NotesApp</div>
        {user.token === null ? (
          <Link to="/login">
            <button class="login-button">Login</button>
          </Link>
        ) : (
          <div onClick={logoutHandler}>
            <button class="login-button">Logout</button>
          </div>
        )}
      </div>
    </>
  );
}

