import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white bg-primary navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="#" className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
                    </li>
                </ul>
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
            {/* /.navbar */}
        </div>
    )
}
