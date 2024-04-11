import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './views/UserDetails';
import UploadImage from './views/UploadImage';
import SelectType from './views/SelectType';
import Verification from './views/Verification';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/select-type" element={<SelectType />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;