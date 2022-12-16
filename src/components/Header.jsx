import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
       <header>
        <Link to='/'>
        <h1 className='mb-2'>Fake Store</h1>
        </Link>
        <Navbar />
 </header> 
    )
}