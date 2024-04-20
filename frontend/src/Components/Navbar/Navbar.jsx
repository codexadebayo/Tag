import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png'


const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext)

    const menuRef = useRef();
    const dropdownToggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');

    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/' style={{ textDecoration: 'none' }}> <img src={logo} alt="" /></Link>
                <Link to='/' style={{ textDecoration: 'none' }}><p>TAG</p></Link>
            </div>
            <img className='nav-dropdown' onClick={dropdownToggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}> <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("men") }}> <Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}> <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' style={{ textDecoration: 'none' }}><button> Login</button></Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}><img src={cart_icon} alt="" srcset="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar