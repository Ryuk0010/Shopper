import React from 'react';
import './Header.css';
// import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';
const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <div className='eshopper'>E-Shopper</div>
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            </div>
           
            
        </nav>
    );
};

export default Header;