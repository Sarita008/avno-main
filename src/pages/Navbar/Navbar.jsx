import React from 'react';
import "../../assets/css/style.scss";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();

    const goAddCart = () => {
        navigate("/CartPage")
    }
    return (
        <>

            <nav className="navbar">
                <div className="navbar__logo"> <Link to="./">AVONE</Link></div>
                <div className="navbar__middle-text">
                    WELCOME TO OUR STORE! <strong>SIGNUP</strong>  NOW AND <strong>GET 30% OFF</strong>
                </div>
                <div className="navbar__icons">
                    <AiOutlineSearch className="navbar__icon" />
                    <AiOutlineUser className="navbar__icon" />
                    <AiOutlineHeart className="navbar__icon" />
                    <AiOutlineShoppingCart className="navbar__icon" onClick={goAddCart}/>
                </div>
            </nav>
            <nav className="subnavbar">
                <ul className="subnavbar__menu">
                    <li className="subnavbar__item">HOME</li>
                    <li className="subnavbar__item">SHOP</li>
                    <li className="subnavbar__item">FEATURES</li>
                    <li className="subnavbar__item">COLLECTION</li>
                    <li className="subnavbar__item">WOMEN</li>
                    <li className="subnavbar__item">LOOKBOOK</li>
                    <li className="subnavbar__item">PAGES</li>
                    <li className="subnavbar__item">BLOG</li>
                    <li className="subnavbar__item">BUY NOW</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
