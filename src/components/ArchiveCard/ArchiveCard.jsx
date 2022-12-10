import React from 'react'
import { useAuth } from '../../context/auth-context';
import { useArchive } from "../../context/archive-context";
import { useCart } from "../../context/notes-context";


import axios from "axios";
export const ArchiveCard = ({item}) => {
  const {user} =useAuth();
 const { setArchiveData } = useArchive();
 const {  setNoteData } = useCart();
 const restoreArchive = async () => {
    try {
     console.log("dfd");
     const res = await axios.post(
       `/api/archives/restore/${item._id}`,
       {},
       {
         headers: {authorization:user.token },
       }
     );
     console.log(res);
     setArchiveData({ archive: res.data.archives });
     setNoteData({ notes: res.data.notes });
   } catch (error) {
    //  Toast("Couldn't Restore from Archive ", "error");
   }
 };
 const deleteFromArchive = async () => {
   try {
     const res = await axios.delete(`/api/archives/delete/${item._id}`, {
       headers: { authorization: user.token },
     });
     console.log(res);
     setArchiveData({ archive: res.data.archives });

     
   } catch (error) {
    //  Toast("Couldn't Delete from Archive ", "error");
   }
 };
  return (
    <>
      <div class="notes-card-container">
        <div class="notes-title">{item.title}</div>
        <div class="notes-proority">Priority: {item.priority}</div>
        <div class="notes-content">
          {item.notes}
        </div>
        <div class="notes-label">{item.label}</div>
        <div class="notes-features-container">
          <i  onClick={restoreArchive} class="fa-solid fa-box-archive"></i>
          <i onClick={deleteFromArchive} class="fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
}
