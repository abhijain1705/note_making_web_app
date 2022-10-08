import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ViewNote from './components/ViewNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<ViewNote />} path='/YourNote/:user' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
