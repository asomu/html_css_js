import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Post Not found</h2>
      <p>Well, that's disppointing.</p>
      <p>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
