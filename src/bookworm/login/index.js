import React from "react";
import {Link} from "react-router-dom";

const LoginComponent = () => {
    return (
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"}>
            <div className={""}>
                <div className={"pb-4"}>
                    <h2>Welcome back! <i className="fa fa-book"></i></h2>
                    <h5 className={"text-secondary"}>Sign in to continue</h5>
                </div>

                <div className={"pb-3"}>
                    <form className={"text-secondary"}>
                        <div className={"pb-3"}>
                            <label htmlFor="username" className="form-label">Username </label>
                            <input type="text" id="username" className="form-control form-control-lg"
                                   placeholder="JohnDoe"/>
                        </div>
                        <div className="pb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control form-control-lg"
                                   placeholder="••••••••"/>
                        </div>
                    </form>

                    <div className="pt-4 pb-3">
                        <button className="btn btn-primary w-100 wd-background-purple rounded-pill px-3 py-2">
                            <span className="text-white">Login</span>
                        </button>
                    </div>
                </div>

                <hr/>

                <span className="text-secondary">
                    {"Dont have an account? "}
                    <Link to={"/registration"}>Sign up here!</Link>
                </span>

            </div>
        </div>
    )
}
export default LoginComponent