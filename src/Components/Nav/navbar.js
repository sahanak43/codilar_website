import React from "react";
import "./navbar.css";
import Star from "../assests/Starbugs.jpg"
import {BsCart4} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';

const NavBar=()=>{
    return(
        
        <div>
            <nav class="navbar">
                <div class="navbar-container container">
                    <ul class="menu">
                        <li>
                            <a href="#">Welcome to codilar</a>
                        </li>
                        <li>
                            <a href="#">Sign-in</a>
                        </li>
                        <li>
                            <a href="#">Create an account</a>
                        </li>
                        <li>
                            <select className="selection">
                                <option>vijayawwadda </option>
                            </select>
                        </li>
                    </ul>

                </div>

            </nav>
            <div className="sub-nav">
                <div className="sub-nav-container">
                    <img src={Star} alt="Starbugs" className="image"> </img>
                </div>
                <div className="sub-nav-parent">
                    <label>
                        <input type="search" placeholder={`Search entire store here..${<BsSearch/>}`} className="cart" />
                        <BsCart4 size={"22"} color="#6e716e" className="icon"/>
                    </label>
                </div>
            </div>
        </div>
        
        
    )
}
export default NavBar;