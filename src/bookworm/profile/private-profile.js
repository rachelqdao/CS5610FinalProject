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
import BookClubsItemComponent from "../book-clubs/book-clubs-item";
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
                />

                {
                    currentUser &&
                    <div className={"mb-3"}>
                        <h3 className={"wd-green fw-bold"}>Welcome, {currentUser.firstName}!</h3>

                        {/*user sidebar*/}
                        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                            {/*TODO: hide some of this information for anonymous users*/}
                            {/*user information*/}
                            <div className={"mb-3"}>
                                <p className={"m-0"}> <span className={"fw-bold"}>Username:</span> {currentUser.username}</p>
                                <p className={"m-0"}> <span className={"fw-bold"}>Email:</span> {currentUser.email}</p>
                                <p className={"m-0"}> <span className={"fw-bold"}>User Type:</span> {currentUser.userType}</p>
                                <p className={"m-0"}> <span className={"fw-bold"}>Date Joined:</span> {currentUser.dateJoined}</p>
                            </div>

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
                        </div>
                    </div>
                }


            </div>

            {/*right column*/}
            <div className={"col-12 col-lg-8 col-xl-7"}>

                <div className={"my-4"}>
                    <ReadingListsForm/>
                    <ReadingListItemComponent/>
                </div>


                {/*TODO: look at this later -- show reviews component depending on user type */}
                {
                    !isAdmin && !isBCO &&
                    <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                        <h4 className="fw-bolder">Your Reviews</h4>
                        <ReviewItemComponent/>
                    </div>
                }

                {/*TODO: move below content into separate components*/}
                <div>
                    <BookClubsForm/>
                    <BookClubsItemComponent/>
                </div>

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
            </div>

            {/*right gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

        </div>
    )
}
export default PrivateProfileComponent;