import { createContext, useContext, useState } from "react";
const EditContext = createContext();
const EditProvider = ({ children }) => {
  const [isEdit, setEdit] = useState(false);
  
  return (
    <EditContext.Provider value={{isEdit,setEdit}}>
      {children}
    </EditContext.Provider>
  );
};
const useEdit = () => useContext(EditContext);
export { useEdit, EditProvider };
