// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* Altre route se necessarie */}
    </Routes>
  );
};

export default App;
