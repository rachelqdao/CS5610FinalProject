import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {Link, useNavigate} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import BookClubsForm from "../book-clubs/book-clubs-form";
import {findAllBookClubsThunk} from "../book-clubs/services/book-clubs-thunks";
import BookClubComponent from "../book-clubs/book-club";
// import HomeCarouselItemComponent from "../home/home-carousel-item";

const PrivateProfileComponent = (uid) => {
    const {currentUser} = useSelector((state) => state.users);
    const {bookClubs} = useSelector((state) => state.bookClubs);
    const isAdmin = currentUser.userType === "ADMIN";
    /*console.log(isAdmin);*/
    console.log(JSON.stringify(currentUser))
    const isBCO = currentUser.userType === "BOOK CLUB OWNER";
    const [showCreateForm, setShowCreateForm] = useState(false);
    console.log("in private profile " + currentUser);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect(() => {
        console.log(JSON.stringify(currentUser))
        dispatch(findReadingListsByUserIDThunk(currentUser._id))
    }, [])

    useEffect(() => {
        dispatch(findAllBookClubsThunk());
    }, [])

    // useEffect(() => {
    //     setShowCreateForm(false);
    // }, [bookClubs])

    // console.log("book clubs: " + bookClubs);
    const bookClub = bookClubs.filter(bc => bc.ownerID === currentUser._id);
    // console.log("book club: " + bookClub);

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
                <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                    <ReadingListsForm/>
                    <ReadingListItemComponent/>
                </div>
                {
                    !isAdmin && !isBCO &&
                    <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                        <h4 className="fw-bolder">Your Reviews</h4>
                        <ReviewItemComponent/>
                    </div>
                }
                {
                    isBCO &&
                    <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                        {
                            bookClub.length === 0 &&
                            // only show this stuff if we do not yet have a book club
                            <>
                                {
                                    !showCreateForm &&
                                    <button className='btn wd-green-button' onClick={
                                        () => setShowCreateForm(true)}>
                                        Create a Book Club
                                    </button>
                                }
                                {
                                    showCreateForm &&
                                    <BookClubsForm ownerID={currentUser._id}/>
                                }
                            </>
                        }
                        {
                            bookClub.length !== 0 &&
                            // only show this stuff if we already have a book club
                            <>
                                <BookClubComponent/>
                            </>
                        }

                    </div>
                }

                    <button className="btn wd-pink-button" onClick={handleLogout}>
                        Logout
                    </button>
            </div>
        </>
    )
}
export default PrivateProfileComponent;