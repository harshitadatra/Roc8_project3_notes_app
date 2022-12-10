import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
      <div class="nav-container">
        <div class="brand-name">NotesApp</div>

        <Link to="/login" >
          <button class="login-button">Login</button>
        </Link>
      </div>
    </>
  );
}

