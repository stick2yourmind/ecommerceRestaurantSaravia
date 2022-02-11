import React from 'react';
import { Link } from "react-router-dom";

import Nav from './NavBarStyles'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = () => {
  return (
    <Nav>
        <h1 className='navbar-brand'>
                <a
                className='navbar-link'
                href='/' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Ccia Bar
                </a>
        </h1>
        <ul className='navbar-nav'>
            <li 
            className='navbar-item'>
                <Link 
                    className='navbar-link'
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className='navbar-item'>
                <Link 
                    className='navbar-link'
                    to="productos/fries-nachos"
                >
                    Fritas y Nachos
                </Link>
            </li>
            <li className='navbar-item'>
                <Link 
                    className='navbar-link'
                    to="productos/burgers"
                >
                    Burgers
                </Link>
            </li>
            <li className='navbar-item'>
                <Link 
                    className='navbar-link'
                    to="productos/pizzas"
                >
                    Pizzas
                </Link>
            </li>
        </ul>
        <CartWidget />
    </Nav>
    )
}

export default NavBar
