import React from 'react';
import './../../src/Mapbox.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div>

            {/* Main Sidebar Container */}
            < aside className="main-sidebar sidebar-dark-primary elevation-4" >
                {/* Brand Logo */}
                < Link to="/overall" className="brand-link" >
                    <span className="brand-text font-weight-light">Corona Data Nepal</span>
                </Link >
                {/* Sidebar */}
                < div className="sidebar" >

                    {/* Sidebar Menu */}
                    < nav className="mt-2" >
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview">
                                <Link to="/#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Province Wise Data
    <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>

                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/overall" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Overall</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province1" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province2" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bagmati" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Bagmati</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/gandaki" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Gandaki</p>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/province5" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province 5</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/karnali" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Karnali</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/sudurpaschim" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Sudurpaschim</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav >
                    {/* /.sidebar-menu */}
                </div >
                {/* /.sidebar */}
            </aside >

            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}

        </div>
    )
}
