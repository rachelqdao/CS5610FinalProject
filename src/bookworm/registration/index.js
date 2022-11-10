import React from "react";
import {Link} from "react-router-dom";

const RegistrationComponent = () => {
    return (
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"}>
            <div className={""}>
                <div className={"pb-4"}>
                    <h2>Welcome! <i className="fa fa-book"></i></h2>
                    <h5 className={"text-secondary"}>Create an account to continue</h5>
                </div>

                <div className={"pb-3"}>
                    <div className={"text-secondary"}>
                        <div className={"pb-3"}>
                            <label htmlFor={"firstname"} className={"form-label"}>First Name</label>
                            <input type="text" id="firstname" className="form-control form-control-lg"
                                   placeholder="John"/>
                        </div>

                        <div className="pb-3">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" id="lastname" className="form-control form-control-lg"
                                   placeholder="Doe"/>
                        </div>

                        <div className="pb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" id="email" className="form-control form-control-lg"
                                   placeholder="hello@website.com"/>
                        </div>

                        <div className="pb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" id="username" className="form-control form-control-lg"
                                   placeholder="JohnDoe"/>
                        </div>

                        <div className="pb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control form-control-lg"
                                   placeholder="••••••••"/>
                        </div>

                        <div>
                            <input type={"radio"} name={"user"}/>
                        </div>

                        <div>
                            <input type={"radio"} name={"user"}/>
                        </div>
                    </div>

                    <div className="pt-4 pb-3">
                        <button className="btn btn-primary w-100 wd-background-purple rounded-pill px-3 py-2">
                            <span className="text-white">Sign Up</span>
                        </button>
                    </div>

                </div>

                <hr/>

                <span className="text-secondary">
                    {"Already have an account? "}
                    <Link to={"/login"}>Log in here!</Link>
                </span>

            </div>
        </div>

    )
}
export default RegistrationComponent