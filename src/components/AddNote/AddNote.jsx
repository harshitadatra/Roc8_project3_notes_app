import React,{useState} from 'react'
// import { useCart } from '../../context/notes-context';
import axios from "axios";
import { useAuth } from '../../context/auth-context';
import { useCart } from '../../context/notes-context';

export const AddNote = () => {
    const initialData = {
      title: "",
      label: "Home",
      notes: "",
      priority: "High",
      isEditing: false,
      bgColor: "off-white",
     
    };

    const [showForm,setShowCard] = useState(false);
    const [note,setNote]= useState(initialData);
    const {user} = useAuth();
    const {setNoteData} = useCart();
    // console.log(user);
    // console.log(user.token);


    const showHandler = () => 
    {
        setShowCard(!showForm);
    }
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setNote({ ...note, [name]: value });
    };
    // console.log(note);

    const addNoteHandler =  async () => {
        setShowCard(!showForm);
      
      try {
        const res = await axios.post(
          `/api/notes`,
          {note},
          {
            headers: {  authorization: user.token  },
          }
        );
         setNoteData({notes:res.data.notes})
        // console.log(res);
        
      } catch (error) {
        // Toast("Something went Wrong", "error");
        console.log(error.response);
      }
    
    };
   
  return (
    <>
      <button class="take-a-note-button" onClick={showHandler}>
        Take Note
      </button>
      
      {showForm && (
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
            <select onChange={(e) => handleChange(e)} name="label" id="label" className="input-text" required>
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
            <button className="add-note-button" onClick={addNoteHandler}>
              {" "}
              AddNote
            </button>
          </div>
        </div>
      )}
    </>
  );
}


