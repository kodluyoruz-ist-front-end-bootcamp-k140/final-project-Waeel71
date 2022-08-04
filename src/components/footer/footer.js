import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="navbar-nav mt-auto footer bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="navbar-item">
                    <Link to="/" className="nav-link m-2 h-1">Ana Sayfa</Link>
                    <Link to="/course" className="nav-link m-2 h-1">Korslar</Link>
                    <Link to="/blog" className="nav-link m-2 h-1">Blog</Link>
                    <Link to="/about" className="nav-link m-2 h-1">About</Link>
                    <Link to="/contactus" className="nav-link m-2 h-1">My Courses</Link>
                </li>
            </ul>
            <p className="text-light">copyright © 2022 all rights reserved</p>
        </footer>
    )
}

export default Footer;