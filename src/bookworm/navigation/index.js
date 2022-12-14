import React from "react";
import "bootstrap";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import "./index.css"

const NavigationBar = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top p-3">
            <div className="container-fluid">
                <Link to={"/"}>
                    <h2 className={"navbar-brand fw-bold wd-brand-color"}>Bookworm <i className="bi bi-book-fill"></i></h2>
                </Link>

                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">

                    {/*website logo*/}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"}
                                  className={`nav-link ${active === '' ? 'active fw-bold' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/search"}
                                  className={`nav-link ${active === 'search' ? 'active fw-bold' : ''}`}>
                                Search
                            </Link>
                        </li>
                     {/*   <li className="nav-item">
                            <Link to={"/users"}
                                  className={`nav-link ${active === 'users' ? 'active fw-bold' : ''}`}>
                                Users
                            </Link>
                        </li>*/}
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            currentUser
                                ?
                                <li className="nav-item">
                                    <Link to={"/profile"}
                                          className={`nav-link ${active === 'profile' ? 'active fw-bold' : ''}`}>
                                        Profile
                                    </Link>
                                </li>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to={"/login"}
                                              className={`nav-link ${active === 'login' ? 'active fw-bold' : ''}`}>
                                            Log In
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/registration"}
                                              className={`nav-link ${active === 'registration' ? 'active fw-bold' : ''}`}>
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default NavigationBar