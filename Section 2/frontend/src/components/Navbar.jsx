import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import UseAppContext from '../AppContext';

const Navbar = () => {

    const { loggedIn, logout } = UseAppContext();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const displayUserOption = () => {
        if (loggedIn) {
            return ( 
            <>
            <li className='nav-item'><button className='btn btn-danger' onClick={logout}>Logout</button></li>
            <li>
                <img height={50} className='rounded-circle' src={"http://localhost:5000/" +currentUser.avatar} alt="avatar" />
            </li>
            </>
            )
        }
        else{
            return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                        Signup
                    </NavLink>
                </li>
            </>
            )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-territory">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h2>React</h2>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-3 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/event">
                                Event Handling
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/state">
                                State Management
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/post">
                                Facebook Post
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo">
                                To Do List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/laptop">
                                LaptopList
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage">
                                ManageUser
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                App Products
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        {displayUserOption()}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;