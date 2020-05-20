import React from 'react';
import './../../src/Mapbox.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4 sidenav mt-8">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">

                    <span className="brand-text font-weight-light">Corona Data Details</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview menu-open">

                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/Overall" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Overall</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Province1" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Province 1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Province2" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Province 2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Bagmati" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Bagmati</p>
                                        </Link >
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Gandaki" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Gandaki</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Province5" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Province 5</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Karnali" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Karnali</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Sudurpaschim" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Sudurpaschim</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>



        </div>
    )
}
