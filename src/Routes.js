import React from 'react'
import {Routes,Route} from "react-router-dom";
import { Login } from './pages/Auth/Login';
import { Home } from './pages/Home/Home';
import "./App.css"
import { NotesPage } from './pages/NotesPage/NotesPage';
import { ArchivePage } from './pages/ArchivePage/ArchivePage';
import { Signup } from './pages/Auth/Signup';
import { DeletePage } from './pages/DeletePage/DeletePage';
export const RouterPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/notes" element = {<NotesPage/>}/>
        <Route path="/archive" element= {<ArchivePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/trash" element={<DeletePage/>}/>
        
      </Routes>
    </div>
  )
}


