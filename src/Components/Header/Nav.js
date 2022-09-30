import React from 'react';
import './Nav.css'
import Logo from '../images//Logo.svg'
const Nav = () => {
    return (
        <div>
            <div className='navber'>
                <div>
                    <a href="/Home">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div>
                    <a href="/Order">Order</a>
                    <a href="/Order Review">Order Review</a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;