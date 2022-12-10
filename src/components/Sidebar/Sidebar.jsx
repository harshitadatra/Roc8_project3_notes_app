import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <aside class="aside-container">
        <Link class="side-bar-navigate" to="/notes">
          <div>Notes</div>
        </Link>
        <Link class="side-bar-navigate" to="/archive">
          <div>Archive</div>
        </Link>
        <Link class="side-bar-navigate"  to="/trash">
          <div>Trash</div>
        </Link>
      </aside>
    </>
  );
}


