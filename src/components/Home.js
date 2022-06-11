import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Todo from './Todo';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todo" element={Todo}>
          Todo
        </Link>
      </nav>
    </div>
  );
}

export default Home;
