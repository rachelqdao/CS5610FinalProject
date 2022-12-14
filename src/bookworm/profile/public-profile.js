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
import {findAllUsersThunk} from "../users/users-thunks";

const PublicProfileComponent = (uid) => {
    const dispatch = useDispatch();
    const {users, loading, currentUser} = useSelector(state => state.users);
    const publicUser = users.filter(x => x._id === uid.uid)[0];
    const isAdmin = publicUser.userType === 'ADMIN';
    const isBCO = publicUser.userType === "BOOK CLUB OWNER";
    
    const joinBookClub = currentUser.userType === "USER" && isBCO;
    
    const handleJoinBookClub = () => {
        console.log("TODO need to implement this");
    }

    return(
        <>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            <h2>{publicUser.firstName} {publicUser.lastName}</h2>
            <h5>Username: {publicUser.username}</h5>
            {/*<h5>Email: {publicUser.email}</h5>*/}
            <h5>User Type: {publicUser.userType}</h5>
            {/*<h5>Date Joined: {publicUser.dateJoined}</h5>*/}

            {
                !isAdmin && !isBCO &&
                <>
                    <br/><br/>
                    <h5>User Reviews</h5>
                    <ReviewItemComponent/>
                </>

            }

            {/*user reading lists are hidden*/}

            {/*for bco, will show the list of users with the option to join the book club*/}
            {/*and also the current book*/}
            {
                joinBookClub &&
                <button className="btn btn-primary" onClick={handleJoinBookClub}>
                    Join this Book Club
                </button>
            }
        </>
        )
}

export default PublicProfileComponent;