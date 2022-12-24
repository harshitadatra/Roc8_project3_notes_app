import React, { useState,useEffect } from "react";
// import { useCart } from '../../context/notes-context';
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/notes-context";
import { useEdit } from "../../context/edit-context";
export const EditNote = () => {

 const [title, setTitle] = useState("");
 const [label, setLabel] = useState("");
 const [notes, setNotes] = useState("");
 const [id, setId] = useState("");

  const { isEdit, setEdit } = useEdit();

 useEffect(() => {
   setId(localStorage.getItem("id"));

   setTitle(localStorage.getItem("title"));
   setLabel(localStorage.getItem("label"));
   setNotes(localStorage.getItem("notes"));
 

     
   
 }, []);


  // const [showForm, setShowCard] = useState(false);
//   const [note, setNote] = useState(initialData);
  const { user } = useAuth();
  const { setNoteData } = useCart();
  // console.log(user);
  // console.log(user.token);

//   const showHandler = () => {
//     setShowCard(!showForm);
//   };
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setNote({ ...note, [name]: value });
//   };
//   // console.log(note);

  const editNote = async () => {
    const note = {
      title: title,
      label: label,
      notes: notes,
      priority: "High",
      isEditing: false,
      bgColor: "off-white",
    };
    console.log("line 54",note);
     setEdit(!isEdit);
    try {
      const res = await axios.post(
        `/api/notes/${id}`,
         { note },
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
  const cancelHandler = () => 
  {
    setEdit(!isEdit);
  }

 

  return (
    <>
      {/* <button class="take-a-note-button" onClick={showHandler}>
        Take Note
      </button> */}

      
        <div class="new-note-details">
          <div className="note-details">
            <label htmlFor="title">Title*</label>

            <input
              type="text"
              name="title"
              className="input-text"
              id="title"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            <label htmlFor="label">label*</label>
            <select
              onChange={(e) => setLabel(e.target.value)}
              name="label"
              id="label"
              className="input-text"
              value={label}
              required
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
              required
            //   onChange={(e) => handleChange(e)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="add-notes-content"></div>
          <input
            name="notes"
            onChange={(e) => setNotes(e.target.value)}
            className="input-note-content"
            value={notes}
            required
          />
          <div className="addnotes-buttons">
            <button className="cancel-button" onClick={cancelHandler}> Cancel </button>
            <button className="add-note-button" onClick={editNote}>
              {" "}
              EditNote
            </button>
          </div>
        </div>
      
    </>
  );
};
