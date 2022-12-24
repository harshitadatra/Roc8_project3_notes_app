import React from 'react'
import { AddNote } from '../../components/AddNote/AddNote';
import { Navbar } from '../../components/Navbar/Navbar';
import { NotesCard } from '../../components/NotesCard/NotesCard';
import { useCart } from '../../context/notes-context';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { EditNote } from '../../components/EditNote/EditNote';
import { useEdit } from '../../context/edit-context';
 export const NotesPage = () => {
  const {noteData} = useCart();
  console.log(noteData.notes);
   const { isEdit } =useEdit()

  return (
    <>
      <Navbar />
      <div class="notes-page-container">
        <Sidebar />
        <main className="notes-container">
          <AddNote />
          { isEdit ? 
          <EditNote/> : <></>
         }

          <div className="notes-card-display">
            {noteData.notes.map((item) => (
              <NotesCard key={item.id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}


