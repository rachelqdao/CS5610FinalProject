import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {Link, useNavigate} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import BookClubMembersComponent from "../book-clubs/book-club-members";
import BookClubsForm from "../book-clubs/services/book-clubs-form";
import {findAllBookClubsThunk, findBookClubByOwnerIDThunk} from "../book-clubs/services/book-clubs-thunks";
// import HomeCarouselItemComponent from "../home/home-carousel-item";

const PrivateProfileComponent = (uid) => {
    const {currentUser} = useSelector((state) => state.users);
    const {bookClubs} = useSelector((state) => state.bookClubs);
    const isAdmin = currentUser.userType === "ADMIN";
    /*console.log(isAdmin);*/
    console.log(JSON.stringify(currentUser))
    const isBCO = currentUser.userType === "BOOK CLUB OWNER";
    const [showCreateForm, setShowCreateForm] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect(() => {
        console.log(JSON.stringify(currentUser))
        dispatch(findReadingListsByUserIDThunk(currentUser._id))
    })

    useEffect(() => {
        dispatch(findAllBookClubsThunk());
    })

    // useEffect(() => {
    //     setShowCreateForm(false);
    // }, [bookClubs])

    // useEffect(() => {
    //     dispatch(findBookClubByOwnerIDThunk(currentUser._id))
    // })

    const openBookClubForm = () => {
        setShowCreateForm(true)
    }

    console.log("book clubs: " + bookClubs);
    const bookClub = bookClubs.filter(bc => bc.ownerID === currentUser._id);
    console.log(bookClub);
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

                                <p>eventually only show this stuff if we do not yet have a book club</p>
                                {
                                    !showCreateForm &&
                                    <button className='btn wd-green-button' onClick={openBookClubForm}>
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
                                <h1>THERE IS A BOOK CLUB</h1>
                                <p> eventually only show this stuff if we already have a book club</p>
                                <h5>Current Book</h5>
                                <br/><br/>
                                <h5>Members</h5>
                                <BookClubMembersComponent/>
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