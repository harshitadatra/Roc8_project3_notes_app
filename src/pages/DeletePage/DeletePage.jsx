import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { DeleteCard } from "../../components/DeleteCard/DeleteCard";
import { useDelete } from "../../context/delete-context";
export const DeletePage = () => {
  const {deleteArray} = useDelete();
  console.log(deleteArray);
  
  
  return (
    <>
      <Navbar />
      <div class="notes-page-container">
        <Sidebar />
       <main className="delete-card-display">
          {deleteArray.map((item) => (
            <DeleteCard key={item._id} item={item} />
          ))}    
        </main>
      </div>
    </>
  );
};
