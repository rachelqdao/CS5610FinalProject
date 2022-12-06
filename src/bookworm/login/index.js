import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../users/users-thunks";

const LoginComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        /* handle empty input fields */
        if (username === '' || password === '') {
            setError('Please fill in all fields')
        } else {
            /* attempt to login */
            const loginUser = {username, password}
            dispatch(loginThunk(loginUser))

            console.log(currentUser)
        }
    }

    return (
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"}>

            {/*welcome*/}
            <div className={"pb-4"}>
                <h2>Welcome back! <i className="fa fa-book"></i></h2>
                <h5 className={"text-secondary"}>Sign in to continue</h5>
            </div>

            {/*error*/}
            {
                error &&
                <div className={"alert alert-danger"}>
                    {error}
                </div>
            }

            {/*form*/}
            <div className={"pb-3"}>
                <form className={"text-secondary"}>

                    {/*username*/}
                    <div className={"pb-3"}>
                        <label htmlFor="username" className="form-label">Username </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            placeholder="JohnDoe"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/*password*/}
                    <div className="pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>

                <div className="pt-4 pb-3">
                    <button
                        className="btn btn-primary w-100 wd-background-purple rounded-pill px-3 py-2"
                        onClick={handleLoginBtn}
                    >
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
    )
}
export default LoginComponent