import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerThunk} from "../users/users-thunks";

const RegistrationComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [userType, setUserType] = useState(1)
    const [error, setError] = useState(null)

    const handleUserType = (typeNumber) => {
        setUserType(typeNumber)
    }

    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }

        if ((firstName === '')
            || (lastName === '')
            || (email === '')
            || (username === '')
            || (password === '')
            || (validatePassword === '')) {
            setError('Please fill in all fields')
            return
        }
        setError(null)
        const newUser = {
            firstName,
            lastName,
            email,
            username,
            password,
            userType
        }
        dispatch(registerThunk(newUser))
    }

    return (
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"}>
            <div className={""}>

                {/*welcome*/}
                <div className={"pb-4"}>
                    <h2>Welcome! <i className="fa fa-book"></i></h2>
                    <h5 className={"text-secondary"}>Create an account to continue</h5>
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
                    <div className={"text-secondary"}>

                        {/*first name*/}
                        <div className={"pb-3"}>
                            <label htmlFor={"firstname"} className={"form-label"}>
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                className="form-control form-control-lg"
                                placeholder="John"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        {/*last name*/}
                        <div className="pb-3">
                            <label htmlFor="lastname" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                className="form-control form-control-lg"
                                placeholder="Doe"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        {/*email*/}
                        <div className="pb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control form-control-lg"
                                placeholder="hello@website.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/*username*/}
                        <div className="pb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input type="text"
                                   id="username"
                                   className="form-control form-control-lg"
                                   placeholder="JohnDoe"
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/*password*/}
                        <div className="pb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/*validate password*/}
                        <div className="pb-3">
                            <label htmlFor="validatePassword" className="form-label">
                                Re-enter your Password
                            </label>
                            <input
                                type="password"
                                id="validatePassword"
                                className="form-control form-control-lg"
                                placeholder="••••••••"
                                onChange={(e) => setValidatePassword(e.target.value)}
                            />
                        </div>

                        {/*user type*/}
                        <div>
                            <div>
                                <input
                                    type={"radio"}
                                    name={"user"}
                                    id={"userRadio"}
                                    className={"me-1"}
                                    onChange={(e) => handleUserType(1)}
                                />
                                <label htmlFor="userRadio"> {"I am a user"}</label>
                            </div>

                            <div>
                                <input
                                    type={"radio"}
                                    name={"user"}
                                    id={"authorRadio"}
                                    className={"me-1"}
                                    value={2}
                                    onChange={(e) => handleUserType(2)}
                                />
                                <label htmlFor="authorRadio"> {"I am an author"}</label>
                            </div>

                            <div>
                                <input
                                    type={"radio"}
                                    name={"user"}
                                    id={"adminRadio"}
                                    className={"me-1"}
                                    onChange={(e) => handleUserType(3)}
                                />
                                <label htmlFor="adminRadio"> {"I am an admin"}</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-3">
                        <button
                            className="btn btn-primary w-100 wd-background-purple rounded-pill px-3 py-2"
                            onClick={handleRegisterBtn}
                        >
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