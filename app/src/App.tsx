import React from 'react';
import { Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import SingleCardData from './pages/PersonalData';

function App() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/:id" element={<SingleCardData />} />
    </Routes>
  );
}

export default App;
