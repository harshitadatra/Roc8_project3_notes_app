import { createContext, useContext, useState } from "react";
const NotesContext = createContext({ notes:[]});
const NotesProvider = ({ children }) => {
  const [noteData, setNoteData] = useState({notes:[]});
  return (
    <NotesContext.Provider value={{noteData,setNoteData}}>
      {children}
    </NotesContext.Provider>
  );
};
const useCart = () => useContext(NotesContext);
export { useCart, NotesProvider };
