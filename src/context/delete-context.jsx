import { createContext, useContext, useState } from "react";
const DeleteContext = createContext();
const DeleteProvider = ({ children }) => {
  const [deleteData, setDeleteData] = useState({ delete:[]});
  const deleteArray = []
  return (
    <DeleteContext.Provider value={{ deleteData, setDeleteData,deleteArray }}>
      {children}
    </DeleteContext.Provider>
  );
};
const useDelete= () => useContext(DeleteContext);
export { useDelete, DeleteProvider };
