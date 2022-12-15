import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import BookClubMembersComponent from "./book-club-members";
import {findBookByKeywordThunk} from "../search/services/search-thunks";
import HomeCarouselItemComponent from "../home/home-carousel-item";

const PrivateProfileComponent = (uid) => {
    const {currentUser, users} = useSelector((state) => state.users)
    const isAdmin = currentUser.userType === "ADMIN";
    const isBCO = currentUser.userType === "BOOK CLUB OWNER";

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(currentUser._id))
    }, [])

    // const currentBook = dispatch(findBookByKeywordThunk("adventure"))[0]

    return (

        <>
            <div className={"mb-3"}>
                <div className={"row"}>
                    <div className='col-10'>
                        <h1>Profile</h1>
                    </div>
                    <div className="col-2">
                        <button className="btn wd-green-button float-end" >
                            <Link to="/edit-profile" className="text-decoration-none text-white">
                                Edit Profile
                            </Link>
                        </button>
                    </div>
                </div>
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
                <div>
                    <ReadingListsForm/>
                    <ReadingListItemComponent/>
                </div>
                {
                    !isAdmin && !isBCO &&
                    <ReviewItemComponent/>
                }

                {
                    isBCO &&
                    <>
                        <h5>Current Book</h5>
                        {/*<HomeCarouselItemComponent book={{currentBook}}/>*/}
                        <br/><br/>
                        <h5>Members</h5>
                        <BookClubMembersComponent/>
                    </>
                }

                    <button className="btn wd-pink-button" onClick={handleLogout}>
                        Logout
                    </button>
            </div>
        </>
    )
}
export default PrivateProfileComponent;