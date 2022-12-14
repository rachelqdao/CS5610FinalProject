import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {useNavigate, useSearchParams} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [userID] = useSearchParams({id: ''})

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect(() => {
        // TODO: finds reading list based on profile id in URL,
        //  if NO params, it is the users own profile
        //  otherwise, its another users profile
        if (userID.get('id') === '' || userID.get('id') === currentUser._id) {
            dispatch(findReadingListsByUserIDThunk(currentUser._id))
        } else {
            dispatch(findReadingListsByUserIDThunk(userID.get('id')))
        }
    }, [])

    return (
        <div className={"row"}>
            <div className={"d-none d-xl-flex col-1"}></div>
            <div className={"col-12 col-xl-10"}>
                <div className={"mb-3"}>
                    <h1>Profile</h1>
                    {
                        currentUser &&
                        <>
                            <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                            <h5>Username: {currentUser.username}</h5>
                            <h5>Email: {currentUser.email}</h5>
                            <h5>User Type: {currentUser.userType}</h5>
                            <h5>Date Joined: {currentUser.dateJoined}</h5>
                        </>
                    }
                    <button className="btn wd-pink-button" onClick={handleLogout}>
                        Logout
                    </button>

                </div>

                <div>
                    <ReadingListsForm/>
                    <ReadingListItemComponent/>
                </div>
            </div>
            <div className={"d-none d-xl-flex col-1"}></div>

        </div>
    )
}

export default ProfileComponent