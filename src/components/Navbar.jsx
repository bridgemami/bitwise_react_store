import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {NavLink, Outlet} from 'react-router-dom';


export default function Navbar () {
    return (
       <> 
        <nav className='mb-4'>
            <ul>
                <li>
                    <a>
                       <FontAwesomeIcon icon={faCartShopping } className='cart pe-2' />Cart
                    </a>
                </li>
            </ul>
        </nav>
        <Outlet />
 </> 
    )
}