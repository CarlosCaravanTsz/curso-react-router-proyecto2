import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { EditTodoPage } from './edit/EditTodoPage';
import { NewTodoPage } from './new/NewTodoPage';
import { HomePage } from './home/HomePage';


function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p> Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
