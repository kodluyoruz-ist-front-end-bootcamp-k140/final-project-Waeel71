import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
export function NavBar() {
    return (
        <nav className="navbar border-bottom sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-light mb-0 h-1">Code Place</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link m-2 h-1">Main Page</Link>
                        <Link to="/course" className="nav-link m-2 h-1">Courses</Link>
                        <Link to="/blog" className="nav-link m-2 h-1">Blog</Link>
                        <Link to="/about" className="nav-link m-2 h-1">About</Link>
                        <Link to="/contactus" className="nav-link m-2 h-1">My Courses</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}