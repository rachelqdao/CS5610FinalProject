import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllBookClubsThunk} from "./services/book-clubs-thunks";
import {Link} from "react-router-dom";
import {findAllUsers} from "../users/users-service";
import {findAllUsersThunk} from "../users/users-thunks";

const BookClubComponent = () => {
    const {bookClubs} = useSelector((state) => state.bookClubs);
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllBookClubsThunk());
    }, [])

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [])

    const bookClub = bookClubs.filter(bc => bc.ownerID === currentUser._id);
    const {_id, ownerID, name, members, currentBook} = bookClub[0]; // will only get here if there is a book club

    return(
        <>

            <h4 className="fw-bold m-0">{`Book Club Name: ${name}`}</h4>
            {/*<h5>Current Book</h5>*/}
            {/* need to query for the book*/}
            <br/>
            <h5>Members</h5>

            <ul className='list-group'>
                {
                    members.map((member) => {
                        return (
                            <li key={member._id} className={"list-group-item"}>
                                <Link to={`/profile/${member._id}`}>{member.username}</Link>
                            </li>
                        )

                    })
                }
            </ul>



            {/*bcID={bookClub[0]._id}*/}
        </>
    )
}

export default BookClubComponent;