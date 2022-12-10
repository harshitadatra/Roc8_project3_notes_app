import { createContext, useContext, useState } from "react";
const ArchiveContext = createContext({ archive: [] });
const ArchiveProvider = ({ children }) => {
  const [archiveData, setArchiveData] = useState({archive: [] });
  return (
    <ArchiveContext.Provider value={{ archiveData, setArchiveData }}>
      {children}
    </ArchiveContext.Provider>
  );
};
const useArchive = () => useContext(ArchiveContext);
export { useArchive, ArchiveProvider };
