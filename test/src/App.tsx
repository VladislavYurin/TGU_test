import React from 'react';
import { Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
// import PersonalData from './pages/PersonalData';

function App() {
  return (
    // <Routes>
    //   <Route path="" element={<MainPage />} />
    //   {/* <Route path="/:${id}" element={<PersonalData />} /> */}
    // </Routes>
    <MainPage />
  );
}

export default App;
