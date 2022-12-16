import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findReadingListsByUserIDThunk} from "../readinglists/services/reading-lists-thunks";
import ReviewItemComponent from "../reviews/review-item";
import {addMemberToBookClubThunk, findAllBookClubsThunk} from "../book-clubs/services/book-clubs-thunks";
import {findAllUsersThunk} from "../users/users-thunks";
import ReadingListsItem from "../readinglists/reading-lists-item";

const PublicProfileComponent = (uid) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, currentUser} = useSelector(state => state.users);
    const {bookClubs} = useSelector((state) => state.bookClubs);
    const {readingLists} = useSelector((state) => state.readingLists);
    const {reviews} = useSelector((state) => state.reviews);

    const [publicUser, setPublicUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [isBCO, setIsBCO] = useState(null);
    const [joinBookClub, setJoinBookClub] = useState(null);
    const [bookClubArray, setBookClubArray] = useState(null);
    const [bookClub, setBookClub] = useState(null);
    const [publicUserHasBookClub, setPublicUserHasBookClub] = useState(null);
    // const [bookClubMembers, setBookClubMembers] = useState(null);

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [])
    
    const handleJoinBookClub = () => {
        const bcID = bookClub._id;
        const mid = currentUser._id;
        const username = currentUser.username;
        dispatch(addMemberToBookClubThunk({bcID, mid, username}));
    }

    useEffect(() => {
        if (currentUser && currentUser._id === uid.uid) {
            navigate('/profile')
        }
    }, [uid.uid])


    useEffect(() => {
        if (users.length !== 0) {
            setPublicUser(users.filter(x => x._id === uid.uid)[0])
        }
    }, [users, uid.uid])


    useEffect(() => {
        if (publicUser) {
            setIsAdmin(publicUser.userType === "ADMIN");
            setIsBCO(publicUser.userType === "BOOK CLUB OWNER");
        }
    }, [publicUser])

    useEffect(() => {
        if (bookClubs && publicUser) {
            setBookClubArray(bookClubs.filter(bc => bc.ownerID === publicUser._id))
        }
    }, [bookClubs, publicUser])

    useEffect(() => {
        if (bookClubArray) {
            setPublicUserHasBookClub(bookClubArray.length > 0)
        }
    }, [bookClubArray])

    useEffect(() => {
        if (publicUserHasBookClub) {
            setBookClub(bookClubArray[0])
        }
    }, [publicUserHasBookClub])

    // useEffect(() => {
    //     if (bookClub) {
    //         setBookClubMembers(bookClub.members)
    //     }
    // }, [bookClub])

    useEffect(() => {
        if (publicUser && currentUser && bookClub) {
            if (currentUser.userType === "USER" && isBCO) {
                // see if the current user is already part of this book club
                const membersArray = bookClub.members.filter(x => x._id === currentUser._id);
                setJoinBookClub(membersArray.length === 0);
            }
        }
    }, [publicUser, bookClub])

    return(
        <>
            {
                !publicUser && <>loading...</>
            }
            {
                publicUser &&
                <>
                    <h2>{publicUser.firstName} {publicUser.lastName}</h2>
                    <h5>Username: {publicUser.username}</h5>
                    <h5>User Type: {publicUser.userType}</h5>
                    <br/><br/>

                    <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                        <h3 className="fw-bold mb-1">User Reading Lists</h3>
                        {
                            readingLists &&
                            <ReadingListsItem/>
                        }
                    </div>
                    <br/>

                    {
                        publicUser.userType === "USER" &&
                        <>
                            <div className="bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3">
                                <h3 className="fw-bold mb-1">User Reviews</h3>
                                {
                                    reviews &&
                                    <ReviewItemComponent/>
                                }
                            </div>
                            <br/>
                        </>
                    }

                    {
                        isBCO && !publicUserHasBookClub &&
                        <h3>This user does not have a book club yet!</h3>
                    }

                    {
                        bookClub && isBCO && publicUserHasBookClub &&
                        <>
                            <h2>{`Book Club Name: ${bookClub.name}`}</h2>
                            <br/>
                            <h5>Members</h5>
                            <ul className="list-group">
                                {
                                    bookClub.members.map((member) => {
                                        return(
                                            <li className="list-group-item" key={member._id}>
                                                <Link to={`/profile/${member._id}`}>
                                                    {member.username}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <br/>
                            {/*need to query for current book*/}

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