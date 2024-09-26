import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Fruits from './Fruits';

function ProductSearch() {
  return (
    <div className='Container bg-body-secondary d-flex  justify-content-center'>
      <ul className='text-dark d-flex py-4 gap-5'>
        <li><button className='btn btn-success'>All</button></li>
        <li><button className='btn btn-outline-success'>Fruits</button></li>
        <li><button className='btn btn-outline-success'>Vegitable</button></li>
        <li><button className='btn btn-outline-success'>Fertilizer</button></li>
        <li><button className='btn btn-outline-success'>Seads</button></li>
      </ul>
    </div>
  );
}

export default ProductSearch;
