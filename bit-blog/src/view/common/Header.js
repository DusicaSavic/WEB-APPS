import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 style={{ margin: 0 }} className="brand-logo"> BIT BLOG</h1>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Homeee</Link></li>
                    <li><Link to='/blogs'>BlogList</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header