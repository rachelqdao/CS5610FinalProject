import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../users/users-thunks";

const RegistrationComponent = () => {
    const {currentUser, loading} = useSelector((state) => state.users)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [userType, setUserType] = useState('USER')
    const [error, setError] = useState(null)

    const handleUserType = (type) => {
        setUserType(type)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegisterBtn = () => {
        /* validate password */
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }

        /* handle empty input fields */
        if ((firstName === '')
            || (lastName === '')
            || (email === '')
            || (username === '')
            || (password === '')
            || (validatePassword === '')) {
            setError('Please fill in all fields')
            return
        }

        const newUser = {
            firstName,
            lastName,
            email,
            username,
            password,
            userType,
            dateJoined: new Date()
        }

        console.log(newUser)
        dispatch(registerThunk(newUser))

        setError('Username has already been taken')
    }

    useEffect(() => {
        if (currentUser) {
            setError(null)
            navigate('/')
        }
    }, [currentUser, navigate])

    return (
        <div className={"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"}>
            <div className={"bg-white rounded border border-dark border-opacity-25 border-2 p-5 m-4"}>
                {/*welcome*/}
                <div className={"pb-4"}>
                    <h2 className={'fw-bold'}>Welcome! <i className="fa fa-book"></i></h2>
                    <h5 className={"text-secondary"}>Create an account to continue</h5>
                </div>

                {/*error*/}
                {
                    error && !loading &&
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
                                    className={"me-1 form-check-input"}
                                    value={"USER"}
                                    checked={userType === "USER"}
                                    onChange={(e) => handleUserType('USER')}
                                />
                                <label htmlFor="userRadio"> {"I am a user"}</label>
                            </div>

                            <div>
                                <input
                                    type={"radio"}
                                    name={"user"}
                                    id={"authorRadio"}
                                    className={"me-1 form-check-input"}
                                    value={"ADMIN"}
                                    checked={userType === "ADMIN"}
                                    onChange={(e) => handleUserType('ADMIN')}
                                />
                                <label htmlFor="authorRadio"> {"I am an admin"}</label>
                            </div>

                            <div>
                                <input
                                    type={"radio"}
                                    name={"user"}
                                    id={"adminRadio"}
                                    className={"me-1 form-check-input"}
                                    value={"BOOK CLUB OWNER"}
                                    checked={userType === "BOOK CLUB OWNER"}
                                    onChange={(e) => handleUserType('BOOK CLUB OWNER')}
                                />
                                <label htmlFor="adminRadio"> {"I am a Book Club owner"}</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-3">
                        <button
                            className="btn wd-green-button w-100 rounded px-3 py-2"
                            onClick={handleRegisterBtn}
                        >
                            <span className="text-white">Sign Up</span>
                        </button>
                    </div>
                </div>

                <hr/>

                <span className="text-secondary">
                    {"Already have an account? "}
                    <Link to={"/login"} className={"wd-green-link fw-bold"}>Log in here!</Link>
                </span>
            </div>
        </div>

    )
}
export default RegistrationComponent