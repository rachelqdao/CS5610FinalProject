import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {
    addMemberToBookClubThunk,
    findAllBookClubsThunk,
    findBookClubByOwnerIDThunk
} from "./services/book-clubs-thunks";
import userEvent from "@testing-library/user-event";
import {current} from "@reduxjs/toolkit";

const BookClubsItemComponent = (uid) => {
    console.log("bc component uid: " + uid.uid);
    const {bookClubs, currentBookClub} = useSelector((state) => state.bookClubs);
    const {currentUser} = useSelector((state) => state.users);
    const {users} = useSelector((state)=>state.users);
    const dispatch = useDispatch();

    const [publicUser, setPublicUser] = useState(null);
    const [joinBookClub, setJoinBookClub] = useState(null);
    const [bookClubArray, setBookClubArray] = useState(null);
    const [bookClub, setBookClub] = useState(null);
    const [publicUserHasBookClub, setPublicUserHasBookClub] = useState(null);
    // const [currentUserBookClub, setCurrentUserBookclub] = useState(null);

    useEffect(() => {
        dispatch(findAllBookClubsThunk())
    }, [])

    useEffect(() => {
        if (users.length !== 0) {
            setPublicUser(users.filter(x => x._id === uid.uid)[0])
            console.log(publicUser)
        }
    }, [users, uid.uid])

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
            console.log(bookClub)
        }
    }, [publicUserHasBookClub])

    useEffect(() => {
        if (publicUser && currentUser && bookClub) {
            if (currentUser.userType === "USER" && publicUser.userType === "BOOK CLUB OWNER") {
                // see if the current user is already part of this book club
                const membersArray = bookClub.members.filter(x => x._id === currentUser._id);
                setJoinBookClub(membersArray.length === 0);
            }
        }
    }, [publicUser, bookClub])

    useEffect(() => {
        dispatch(findBookClubByOwnerIDThunk(currentUser))
    }, [])


    const handleJoinBookClub = () => {
        const bcID = bookClub._id;
        const mid = currentUser._id;
        const username = currentUser.username;
        dispatch(addMemberToBookClubThunk({bcID, mid, username}));
    }

    return (
        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
            {
                currentBookClub &&
                <ul className='list-group'>
                    {
                        currentBookClub.members.map((member) => {
                        return (
                            <li key={member._id} className={"list-group-item"}>
                                <Link to={`/profile?id=${member._id}`}>{member.username}</Link>
                            </li>
                        )

                        })
                    }
                </ul>
            }
            {
                bookClub &&
                <>
                    <h5 className={"wd-green fw-bold"}>{`${bookClub.name}`}</h5>
                    <h5 className={"wd-pink fw-bold"}>Members:</h5>
                    <ul className='list-group'>
                        {
                            bookClub.members &&
                            bookClub.members.map((member) => {
                                return (
                                    <li key={member._id} className={"list-group-item"}>
                                        <Link to={`/profile?id=${member._id}`}>{member.username}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
            <br/>
            {
                currentUser && currentUser.userType === "USER" &&
                <button className="btn wd-green-button" onClick={handleJoinBookClub}>
                    Join Book Club
                </button>
            }

        </div>
    )
}
export default BookClubsItemComponent;