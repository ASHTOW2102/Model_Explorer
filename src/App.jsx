// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseModels from './component/BrowseModels';
import ModelDetail from './component/ModelDetail';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrowseModels />} />
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
