import React, { useReducer, useState } from 'react';
import {useAuth} from "../../context/auth-context";
import { useArchive } from '../../context/archive-context';
import {useCart} from "../../context/notes-context";
import { useDelete } from '../../context/delete-context';
import axios from "axios"
export const NotesCard = ({item}) => {
    const {user} = useAuth();
    const {setArchiveData} = useArchive();
    const {deleteData,setDeleteData,deleteArray} = useDelete();

    const { noteData, setNoteData } = useCart();
    const [isEdit,setEdit] = useState(false);
    const initialData = {
      title: item.title,
      label: item.label,
      notes: item.notes,
      priority: item.priority,
      trash: [],
      bgColor: "off-white",
    };

    const [note,setNote]= useState(initialData);
      
       
       const handleChange = (e) => {
         const name = e.target.name;
         const value = e.target.value;
         console.log(name);
         console.log(value);
         setNote({ ...note, [name]: value });
       };

    // console.log(note);
    
    
    const addToArchive = async () => {
  try {
        console.log("archive");

    const res = await axios.post(
      `api/notes/archives/${item._id}`,
      { item},
      {
        headers: { authorization: user.token},
      }
    );
    setArchiveData({ archive: res.data.archives });
    setNoteData({ notes: res.data.notes });


    console.log(res);
  
  } catch (error) {
    // Toast("Couldn't Add to Archive ", "error");
  }
};



const deleteNote = async () => {
  console.log("dleere")

  try {
       
    const res = await axios.delete(
      `/api/notes/${item._id}`,
     
      
      
    
      {
        headers: { authorization: user.token },
      }
    );
    console.log("del",res);
    console.log("delnote",item);
     
         setNoteData({ notes: res.data.notes });
         

         deleteArray.push(item);
         

      } catch (error) {
    // Toast("Couldn't Delete Note,Try again later", "error");
  }
};
const editHandler = () => 
{
  setEdit(!isEdit);
}

 const editNote = async () => {
  console.log(note);

  try {

    const res = await axios.post(
      `/api/notes/${item._id}`,
      {note},
      {
        headers: { authorization: user.token },
      }
    );
    console.log(res);
     setNoteData({ notes: res.data.notes });
  } catch (error) {
    // Toast("Couldn't Update Note", "error");
    console.log(error);
  }
};

  return (
    <>
      {isEdit ? (
        <div class="new-note-details">
          <div className="note-details">
            <label htmlFor="title">Title*</label>

            <input
              type="text"
              name="title"
              className="input-text"
              id="title"
              placeholder="Enter Title"
              onChange={(e) => handleChange(e)}
              value={note.title}
              required
            />
            <label htmlFor="label">label*</label>
            <select
              onChange={(e) => handleChange(e)}
              name="label"
              id="label"
              className="input-text"
              required
              value={note.label}
            >
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Chores">Chores</option>
              <option value="Exercise">Exercise</option>
            </select>
            <label htmlFor="priority">Priority*</label>
            <select
              name="priority"
              id="priority"
              className="input-text"
              value={note.priority}
              required
              onChange={(e) => handleChange(e)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="add-notes-content"></div>
          <input
            name="notes"
            onChange={(e) => handleChange(e)}
            className="input-note-content"
            value={note.notes}
            required
          />
          <div className="addnotes-buttons">
            <button className="cancel-button"> Cancel </button>
            <button className="add-note-button" onClick={editNote}>
              {" "}
              edit Note
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      
          <div className="notes-card-container">
            <div className="notes-title">{item.title}</div>
            <div className="notes-priority">Priority:{item.priority}</div>
            <div className="notes-content">{item.notes}</div>
            <div className="notes-label">{item.label}</div>
            <div className="notes-features-container">
              <i onClick={editHandler} class="fa-solid fa-pen-to-square"></i>
              <i onClick={addToArchive} class="fa-solid fa-box-archive"></i>
              <i onClick={deleteNote} class="fa-solid fa-trash"></i>
            </div>
          </div>
        
    </>
  );
}

