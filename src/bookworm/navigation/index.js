import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationBar = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];

    return (
        <>
            <div className="row">
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
                    {/*profile -- CHANGE LATER
                    <li className="nav-item">
                        <Link to={"/profile"}
                              className={`nav-link ${active === 'profile' ? 'active fw-bold' : ''}`}>
                            Profile
                        </Link>
                    </li>

                    login
                    <li className="nav-item">
                        <Link to={"/login"}
                              className={`nav-link ${active === 'login' ? 'active fw-bold' : ''}`}>
                            Log In
                        </Link>
                    </li>

                    registration
                    <li className="nav-item">
                        <Link to={"/registration"}
                              className={`nav-link ${active === 'registration' ? 'active fw-bold' : ''}`}>
                            Sign Up
                        </Link>
                    </li>*/}
                </ul>
            </div>
        </>
    )
};
export default NavigationBar