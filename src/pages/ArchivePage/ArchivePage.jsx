import React from 'react'
import { ArchiveCard } from '../../components/ArchiveCard/ArchiveCard';
import { useArchive } from '../../context/archive-context';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const ArchivePage = () => {
    const {archiveData} = useArchive();
  return (
    <>
      <Navbar />
      <div class="notes-page-container">
        <Sidebar />
        <main className="notes-container">
          {archiveData.archive.map((item) => (
            <ArchiveCard key={item._id} item={item} />
          ))}
        </main>
      </div>
    </>
  );
}

