import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// import ReadingListsForm from "../readinglists/reading-lists-form";
import React, {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
// import ReadingListItemComponent from "../readinglists/reading-lists-item";
import ReviewItemComponent from "../reviews/review-item";
import {addMemberToBookClubThunk, findAllBookClubsThunk} from "../book-clubs/services/book-clubs-thunks";
import {findAllUsersThunk} from "../users/users-thunks";
import ReadingListsItem from "../readinglists/reading-lists-item";
// import HomeCarouselItemComponent from "../home/home-carousel-item";

const PublicProfileComponent = (uid) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, currentUser} = useSelector(state => state.users);
    const {bookClubs} = useSelector((state) => state.bookClubs);
    console.log("in public profile 1 " + users);

    const [publicUser, setPublicUser] = useState(users.filter(x => x._id === uid.uid)[0]);
    const [isAdmin, setIsAdmin] = useState(publicUser.userType === 'ADMIN');
    const [isBCO, setIsBCO] = useState(publicUser.userType === "BOOK CLUB OWNER");
    const [joinBookClub, setJoinBookClub] = useState(currentUser.userType === "USER" && isBCO);
    const [bookClub, setBookClub] = useState(bookClubs.filter(bc => bc.ownerID === publicUser._id));


    // useEffect(() => {
    //     console.log("in use effect")
    //     setPublicUser(users.filter(x => x._id === uid.uid)[0]);
    //     setIsAdmin(publicUser.userType === 'ADMIN');
    //     setIsBCO(publicUser.userType === "BOOK CLUB OWNER");
    //     setJoinBookClub(currentUser.userType === "USER" && isBCO);
    //     setBookClub(bookClubs.filter(bc => bc.ownerID === publicUser._id));
    // }, [users, bookClubs, currentUser, isBCO, isAdmin,
    //     publicUser._id, joinBookClub, bookClub, publicUser.userType, uid.uid]);

    // useEffect(() => {
    //     // dispatch(findAllUsersThunk());
    // }, [dispatch, isAdmin, isBCO, joinBookClub, publicUser])

    useEffect(() => {
        dispatch(findAllBookClubsThunk());
    }, [dispatch])

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
    }, [currentUser._id, dispatch])

    useEffect(() => {
        if (currentUser._id === uid.uid) {
            navigate('/profile')
            return
        }
    }, [currentUser._id, uid.uid, navigate])


    return(
        <>
            {
                currentUser && publicUser && users &&
                <>
                    {console.log("in public profile 2 " + users)}
                    {
                        currentUser && users &&
                        <>
                            <h2>{publicUser.firstName} {publicUser.lastName}</h2>
                            <h5>Username: {publicUser.username}</h5>
                            <h5>User Type: {publicUser.userType}</h5>
                            <br/><br/>
                        </>
                    }

                    {
                        publicUser.userType === "USER" &&
                        <>
                            <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                                <h3 className="fw-bold mb-1">User Reviews</h3>
                                <ReviewItemComponent/>
                            </div>

                            <br/>

                            <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">

                                <h3 className="fw-bold mb-1">User Reading Lists</h3>
                                <ReadingListsItem/>
                            </div>
                        </>
                    }
                    {
                        isBCO && bookClub.length > 0 &&
                        <>
                            <h1>{`Name: ${bookClub[0].name}`}</h1>
                            <h5>Members</h5>
                            {/*<ul className="list-group">*/}
                            {/*    {*/}
                            {/*        bookClubs[0].members.map((member) => {*/}
                            {/*            return(*/}
                            {/*                <li className="list-group-item">{member.username}</li>*/}
                            {/*            )*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*</ul>*/}


                            {/*// need to query for the current book*/}

                            {
                                joinBookClub &&
                                <button className="btn wd-green-button" onClick={handleJoinBookClub}>
                                    Join this Book Club
                                </button>
                            }
                        </>
                    }
                </>
            }

        </>
        )
}

export default PublicProfileComponent;