import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Todo from '../src/components/Todo';
import NotFound from './components/NotFound';

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/todo" element={<Todo />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;
