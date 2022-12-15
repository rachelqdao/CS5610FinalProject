import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
// import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
// import BookClubMembersComponent from "../book-clubs/book-club-members";
import {addMemberToBookClubThunk, findAllBookClubsThunk} from "../book-clubs/services/book-clubs-thunks";
import BookClubComponent from "../book-clubs/book-club";
import {findAllUsersThunk} from "../users/users-thunks";
// import HomeCarouselItemComponent from "../home/home-carousel-item";

const PublicProfileComponent = (uid) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, currentUser} = useSelector(state => state.users);
    const publicUser = users.filter(x => x._id === uid.uid)[0];
    const isAdmin = publicUser.userType === 'ADMIN';
    const isBCO = publicUser.userType === "BOOK CLUB OWNER";
    const {bookClubs} = useSelector((state) => state.bookClubs);
    
    const joinBookClub = currentUser.userType === "USER" && isBCO;

    const bookClub = bookClubs.filter(bc => bc.ownerID === publicUser._id);


    useEffect(() => {
        dispatch(findAllBookClubsThunk());
    }, [])

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [])
    
    const handleJoinBookClub = () => {
        const bcID = bookClub[0]._id;
        const mid = currentUser._id;
        const username = currentUser.username;
        dispatch(addMemberToBookClubThunk({bcID, mid, username}));
    }

    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(currentUser._id))
    }, [])

    useEffect(() => {
        if (currentUser._id === uid.uid) {
            navigate('/profile')
            return
        }
    }, [])


    return(
        <>
            <h2>{publicUser.firstName} {publicUser.lastName}</h2>
            <h5>Username: {publicUser.username}</h5>
            <h5>User Type: {publicUser.userType}</h5>
            <br/><br/>
            {
                !isAdmin && !isBCO &&
                <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                    <h5>User Reviews</h5>
                    <ReviewItemComponent/>
                </div>
            }

            {/*user reading lists should show*/}

            {/*for bco, will show the list of users with the option to join the book club*/}
            {/*and also the current book*/}

            {
                isBCO && bookClub.length > 0 &&
                <>
                    <h1>{`Name: ${bookClub[0].name}`}</h1>
                    {/*// need to query for the current book*/}
                    {/*<h5>Members</h5>*/}
                    {/*<BookClubMembersComponent bcID={bookClub[0]._id}/>*/}

                    {
                        joinBookClub &&
                        <button className="btn wd-green-button" onClick={handleJoinBookClub}>
                            Join this Book Club
                        </button>
                    }
                </>


            }

        </>
        )
}

export default PublicProfileComponent;