import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { NotesProvider } from "./context/notes-context";
import { ArchiveProvider } from "./context/archive-context";
import { DeleteProvider } from "./context/delete-context";
import { EditProvider } from "./context/edit-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EditProvider>
        <DeleteProvider>
          <ArchiveProvider>
            <NotesProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </NotesProvider>
          </ArchiveProvider>
        </DeleteProvider>
      </EditProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
