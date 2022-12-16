import {useDispatch, useSelector} from "react-redux";
import {findUserByIDThunk, logoutThunk} from "../users/users-thunks";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";
import {findReviewsByUserIDThunk} from "../reviews/services/reviews-thunk";
import ReviewItemComponent from "../reviews/review-item";
import BookClubsForm from "../book-clubs/book-clubs-form";
import BookClubsItemComponent from "../book-clubs/book-clubs-item";
import {findBookClubByOwnerIDThunk} from "../book-clubs/services/book-clubs-thunks";


const ProfileComponent = () => {
    const {currentUser, currentProfileInfo} = useSelector((state) => state.users)
    const [userID] = useSearchParams({id: ''})
    const [profileInfo, setProfileInfo] = useState()
    const [isCurrentUser, setIsCurrentUser] = useState(false)
    const [isAnon, setIsAnon] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect(() => {
        // if there is a current user (someone is logged in)
        if (currentUser) {

            // check if the user is navigating to their own profile
            if (userID.get('id') === currentUser._id) {
                navigate('/profile')

            // once on their profile, dispatch relevant thunks
            } else if (userID.get('id') === '') {
                dispatch(findReadingListsByUserIDThunk(currentUser._id))
                dispatch(findReviewsByUserIDThunk(currentUser._id))
                dispatch(findBookClubByOwnerIDThunk(currentUser._id))
                dispatch(findUserByIDThunk(currentUser._id))
                setIsCurrentUser(true)
                setIsAnon(false)

            // otherwise just find whose profile it is
            } else {
                dispatch(findReadingListsByUserIDThunk(userID.get('id')))
                dispatch(findReviewsByUserIDThunk(userID.get('id')))
                dispatch(findBookClubByOwnerIDThunk(userID.get('id')))
                dispatch(findUserByIDThunk(userID.get('id')))
                setIsCurrentUser(false)
                setIsAnon(true)
            }

        // and if anonymous user, also just find the user info
        } else {
            dispatch(findReadingListsByUserIDThunk(userID.get('id')))
            dispatch(findReviewsByUserIDThunk(userID.get('id')))
            dispatch(findBookClubByOwnerIDThunk(userID.get('id')))
            dispatch(findUserByIDThunk(userID.get('id')))
            setIsCurrentUser(false)
            setIsAnon(true)
        }
    }, [currentUser, userID])

    useEffect(() => {
        if (currentProfileInfo) {
            setProfileInfo(currentProfileInfo)
        }
    }, [currentUser, currentProfileInfo, isCurrentUser])

    useEffect(() => {
        console.log(profileInfo)
    }, [profileInfo])

    return (
        <div className={"row"}>

            {/*left gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

            {/*left column*/}
            <div className={"d-none d-lg-block col-4 col-xl-3 pe-4"}>
                <img
                    src={"https://www.svgrepo.com/show/2340/user-bubble.svg"}
                    className={"img-fluid mb-2 mx-auto d-block"}
                    width={150}
                    height={150}
                    alt={"Profile"}
                />

                {
                    profileInfo &&
                    <div className={"mb-3"}>

                        {
                            profileInfo && isCurrentUser &&
                            <>
                                <h3 className={"wd-green fw-bold"}>Welcome,
                                <p>{profileInfo.firstName} {profileInfo.lastName}!</p>
                                </h3>
                            </>
                        }

                        {
                            profileInfo && !isCurrentUser &&
                            <>
                                <h3 className={"wd-green fw-bold"}>
                                    {profileInfo.firstName} {profileInfo.lastName}'s Profile
                                </h3>
                            </>
                        }



                        {/*user sidebar*/}
                        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                            {/*TODO: hide some of this information for anonymous users*/}
                            {/*user information*/}
                            <div>
                                <p className={"m-0"}> <span className={"fw-bold"}>Username:</span> {profileInfo.username}</p>
                                <p className={"m-0"}> <span className={"fw-bold"}>Email:</span> {profileInfo.email}</p>

                                {   isCurrentUser &&
                                    <>
                                        <p className={"m-0"}> <span className={"fw-bold"}>User Type:</span> {profileInfo.userType}</p>
                                        <p className={"m-0"}> <span className={"fw-bold"}>Date Joined:</span> {profileInfo.dateJoined}</p>
                                    </>
                                }
                            </div>

                            {
                                isCurrentUser &&
                                <>
                                    {/*edit profile button*/}
                                    <Link to="/edit-profile" className={"d-block mb-2"}>
                                        <button className="btn wd-green-button">
                                            Edit Profile
                                        </button>
                                    </Link>

                                    {/*log out button*/}
                                    <button className="btn wd-pink-button" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                }
            </div>

            {/*right column*/}
            <div className={"col-12 col-lg-8 col-xl-7"}>
                <div className={"my-4"}>
                    <ReadingListsForm isCurrentUser={isCurrentUser} isAnon={isAnon}/>
                    <ReadingListItemComponent isCurrentUser={isCurrentUser}/>
                </div>

                {/*TODO: get book details and link back to books that the user reviewed*/}
                {
                    (currentUser && (currentUser.userType === "USER" || currentUser.userType === "BOOK CLUB OWNER") || isAnon) &&
                    <div>
                        <h4 className="fw-bold my-4">Reviews</h4>
                        <ReviewItemComponent/>
                    </div>
                }

                {
                    (profileInfo && profileInfo.userType === "BOOK CLUB OWNER") &&
                    <div>
                        <BookClubsForm/>
                        <BookClubsItemComponent/>
                    </div>
                }
            </div>

            {/*right gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

        </div>
    )
}

export default ProfileComponent


/*    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let uid = paths[2];

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    if (uid === undefined) {
        uid = currentUser._id
    }

    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(uid))
        dispatch(findReviewsByUserIDThunk(uid))
    }, [uid])

    return(
        <>
            <Routes>
                <Route index element={<PrivateProfileComponent/>}/>
                <Route path="/!*" element={<PublicProfileComponent uid={uid}/>}/>
            </Routes>
        </>
    )*/


