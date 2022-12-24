import React from 'react';
import {useAuth} from "../../context/auth-context";
import { useArchive } from '../../context/archive-context';
import {useCart} from "../../context/notes-context";
import { useDelete } from '../../context/delete-context';
import axios from "axios"
import { useEdit } from '../../context/edit-context';
export const NotesCard = ({item}) => {
    const {user} = useAuth();
    const {setArchiveData} = useArchive();
    const {deleteArray} = useDelete();
    console.log("item notes card",item)
    const { setNoteData } = useCart();
    const {isEdit, setEdit} = useEdit();
    // const initialData = {
    //   title: item.title,
    //   label: item.label,
    //   notes: item.notes,
    //   priority: item.priority,
    //   trash: [],
    //   bgColor: "off-white",
    // };

    // const [note,setNote]= useState(initialData);
      
       
      //  const handleChange = (e) => {
      //    const name = e.target.name;
      //    const value = e.target.value;
      //    console.log(name);
      //    console.log(value);
      //    setNote({ ...note, [name]: value });
      //  };

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

    const setToLocalStorage = (id, title, label, notes) => {
      localStorage.setItem("id", id);

      localStorage.setItem("title", title);
      localStorage.setItem("label", label);
      localStorage.setItem("notes", notes);
    };
const editHandler = () => 
{
  setEdit(!isEdit);
   setToLocalStorage(item._id,item.title, item.label, item.notes);
}

//  const editNote = async () => {
//   console.log(note);

//   try {

//     const res = await axios.post(
//       `/api/notes/${item._id}`,
//       {note},
//       {
//         headers: { authorization: user.token },
//       }
//     );
//     console.log(res);
//      setNoteData({ notes: res.data.notes });
//   } catch (error) {
//     // Toast("Couldn't Update Note", "error");
//     console.log(error);
//   }
// };

  return (
    <>
      
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

