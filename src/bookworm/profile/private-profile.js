import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {useNavigate, useSearchParams} from "react-router-dom";
import ReadingListComponent from "../readinglists";
import ReadingListsForm from "../readinglists/reading-lists-form";
import {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import BookClubMembersComponent from "./book-club-members";
import {findBookByKeywordThunk} from "../search/services/search-thunks";
import HomeCarouselItemComponent from "../home/home-carousel-item";
import {Route, Routes} from "react-router";
import {Link, useLocation} from "react-router-dom";

const PrivateProfileComponent = (uid) => {
    const {currentUser} = useSelector((state) => state.users)
    const [userID] = useSearchParams({id: ''})
    const isAdmin = currentUser.userType === "ADMIN";
    const isBCO = currentUser.userType === "BOOK CLUB OWNER";

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

    // const currentBook = dispatch(findBookByKeywordThunk("adventure"))[0]

    return (
        <>
            <div className={"mb-3"}>
                <h1>My Profile</h1>
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

                {/*<div>*/}
                {/*    <ReadingListsForm/>*/}
                {/*    <ReadingListItemComponent/>*/}
                {/*</div>*/}

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

                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>

            </div>


        </>
    )
}
export default PrivateProfileComponent;