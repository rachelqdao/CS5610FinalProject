import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <ul className="nav nav-pills">

                        {/*website logo*/}
                        <Link to={"/"}>
                            <h2 className={"pe-3"}>Bookworm <i className="bi bi-book-half"></i></h2>
                        </Link>

                        {/*home*/}
                        <li className="nav-item">
                            <Link to={"/"}
                                  className={`nav-link ${active === '' ? 'active fw-bold' : ''}`}>
                                Home
                            </Link>
                        </li>

                        {/*search*/}
                        <li className="nav-item">
                            <Link to={"/search"}
                                  className={`nav-link ${active === 'search' ? 'active fw-bold' : ''}`}>
                                Search
                            </Link>
                        </li>

                        {/*users -- REMOVE LATER*/}
                        <li className="nav-item">
                            <Link to={"/users"}
                                  className={`nav-link ${active === 'users' ? 'active fw-bold' : ''}`}>
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6">
                    <ul className="nav nav-pills float-end">

                        {/*login*/}
                        <li className="nav-item">
                            <Link to={"/login"}
                                  className={`nav-link ${active === 'login' ? 'active fw-bold' : ''}`}>
                                Log In
                            </Link>
                        </li>

                        {/*registration*/}
                        <li className="nav-item">
                            <Link to={"/registration"}
                                  className={`nav-link ${active === 'registration' ? 'active fw-bold' : ''}`}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};
export default NavigationBar