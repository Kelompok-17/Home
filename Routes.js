
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassList from './components/ClassList';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClassList />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
