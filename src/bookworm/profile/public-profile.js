import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// import ReadingListsForm from "../readinglists/reading-lists-form";
import {useEffect} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
// import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import BookClubMembersComponent from "./book-club-members";
// import HomeCarouselItemComponent from "../home/home-carousel-item";

const PublicProfileComponent = (uid) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, currentUser} = useSelector(state => state.users);
    const publicUser = users.filter(x => x._id === uid.uid)[0];
    const isAdmin = publicUser.userType === 'ADMIN';
    const isBCO = publicUser.userType === "BOOK CLUB OWNER";
    
    const joinBookClub = currentUser.userType === "USER" && isBCO;
    
    const handleJoinBookClub = () => {
        console.log("TODO need to implement this");
    }

    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(currentUser._id))
    }, [])

    useEffect(() => {
        if (currentUser._id === uid.uid) {
            console.log(`the user ids are the same ${currentUser._id} and ${uid.uid}`);
            navigate('/profile')
            return
        }
    }, [])


    return(
        <>
            {console.log(`the user ids aren't equal ${currentUser._id} and ${uid.uid}`)}
            <h2>{publicUser.firstName} {publicUser.lastName}</h2>
            <h5>Username: {publicUser.username}</h5>
            <h5>User Type: {publicUser.userType}</h5>

            {
                !isAdmin && !isBCO &&
                <>
                    <br/><br/>
                    <h5>User Reviews</h5>
                    <ReviewItemComponent/>

                </>
            }

            {/*user reading lists should show*/}

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