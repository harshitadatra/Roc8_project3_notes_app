import React from "react";
import { useAuth } from "../../context/auth-context";
import { useDelete } from "../../context/delete-context";
import { useCart } from "../../context/notes-context";

import axios from "axios";


export const DeleteCard = ({ item }) => {
    const { deleteData, setDeleteData, deleteArray } = useDelete();
    const { user } = useAuth();
    const { noteData, setNoteData } = useCart();


  const deleteNote = async () => {
    console.log("dleere");

    try {
      const res = await axios.delete(
        `/api/notes/${item._id}`,
        
        
        {
          headers: { authorization: user.token },
        }
      );
      console.log(res);
      console.log(item);
      const itemValue =item ;
  console.log(deleteArray);

     deleteArray.pop()


  

      // deleteArray.pop(item);
    } catch (error) {
      // Toast("Couldn't Delete Note,Try again later", "error");
    }
  };
  return (
    <>
      <div class="notes-card-container">
        <div class="notes-title">{item.title}</div>
        <div class="notes-proority">Priority: {item.priority}</div>
        <div class="notes-content">{item.notes}</div>
        <div class="notes-label">{item.label}</div>
        <div class="notes-features-container">
          <i class="fa-solid fa-box-archive"></i>
          <i onClick={deleteNote}class="fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
};