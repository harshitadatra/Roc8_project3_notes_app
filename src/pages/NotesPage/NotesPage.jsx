import React from 'react'
import { AddNote } from '../../components/AddNote/AddNote';
import { Navbar } from '../../components/Navbar/Navbar';
import { NotesCard } from '../../components/NotesCard/NotesCard';
import { useCart } from '../../context/notes-context';
import { Sidebar } from '../../components/Sidebar/Sidebar';
 export const NotesPage = () => {
  const {noteData} = useCart();
  console.log(noteData.notes);

  return (
    <>
      <Navbar />
      <div class="notes-page-container">
        <Sidebar />
        <main className="notes-container">
          <AddNote />
          

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


