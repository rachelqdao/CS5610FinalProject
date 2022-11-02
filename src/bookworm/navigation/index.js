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

                        <h4>Nav Bar Test <i className="bi bi-book-half"></i></h4>

                        <li className="nav-item">
                            <Link to={"/"}
                                  className={`nav-link ${active === '' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/search"}
                                  className={`nav-link ${active === 'search' ? 'active' : ''}`}>
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6">
                    <ul className="nav nav-pills float-end">
                        <li className="nav-item">
                            <Link to={"/login"}
                                  className={`nav-link ${active === 'login' ? 'active' : ''}`}>
                                Log In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/registration"}
                                  className={`nav-link ${active === 'registration' ? 'active' : ''}`}>
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