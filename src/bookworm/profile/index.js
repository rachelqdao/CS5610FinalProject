import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReviewItemComponent from "../reviews/review-item";
import BookClubMembersComponent from "./book-club-members";
import {findBookByKeywordThunk} from "../search/services/search-thunks";
import HomeCarouselItemComponent from "../home/home-carousel-item";
import {Route, Routes} from "react-router";
import PrivateProfileComponent from "./private-profile";
import PublicProfileComponent from "./public-profile";
import {useLocation} from "react-router-dom";

const ProfileComponent = () => {
    // const {currentUser} = useSelector((state) => state.users)
    // const [userID] = useSearchParams({id: ''})
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const uid = paths[2];

    // const isBookClub = currentUser.userType === "BOOK CLUB OWNER";
    // const isAdmin = currentUser.userType === "ADMIN";

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }
    // console.log(currentUser);

    // return (
    //     <>
    //
    //
    //         {
    //             currentUser &&
    //             <>
    //                 <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
    //                 <h5>Username: {currentUser.username}</h5>
    //                 <h5>Email: {currentUser.email}</h5>
    //                 <h5>User Type: {currentUser.userType}</h5>
    //                 <h5>Date Joined: {currentUser.dateJoined}</h5>
    //             </>
    //         }
    //
    //         <div>
    //             <h5>My Reviews</h5>
    //             {/*<ReviewsComponent showBrowseToReview={true}/>*/}
    //         </div>
    //
    //         <div>
    //             <ReadingListsForm/>
    //             <ReadingListItemComponent/>
    //         </div>
    //
    //         <button className="btn wd-pink-button" onClick={handleLogout}>
    //             Logout
    //         </button>
    // </>
    // )
    return(
        <>
            <Routes>
                <Route index element={<PrivateProfileComponent/>}/>
                <Route path="/*" element={<PublicProfileComponent uid={uid}/>}/>
            </Routes>

        </>
    )
}

export default ProfileComponent;

// flexibility
//         <div className={"row"}>
//             <div className={"col-12 col-xl-10"}>
//                 <div className={"mb-3"}>
//                     <h1>Profile</h1>
//
//                     <button className="btn wd-pink-button" onClick={handleLogout}>
//                         Logout
//                     </button>
//
//                 </div>
//
//                 <div>
//                     <ReadingListsForm/>
//                     <ReadingListItemComponent/>
//                 </div>
//             </div>
//             <div className={"d-none d-xl-flex col-1"}></div>
//         </div>
//     )
// }
