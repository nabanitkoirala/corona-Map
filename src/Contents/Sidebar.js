import React from 'react';
import './../../src/Mapbox.css';

export default function Sidebar() {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4 sidenav mt-8">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">

                    <span className="brand-text font-weight-light">Corona Data Details</span>
                </a>
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
                                        <a href="./index.html" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Overall</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Province 1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index2.html" className="nav-link">
                                            <i className="fas fa-angle-right" />
                                            <p>Province 2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Bagmati</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Gandaki</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>provinence 5</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Karnali</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link ">
                                            <i className="fas fa-angle-right" />
                                            <p>Sudurpaschim</p>
                                        </a>
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
