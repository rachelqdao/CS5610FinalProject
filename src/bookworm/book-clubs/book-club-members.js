import React, {useEffect} from "react";
import {findAllUsersThunk} from "../users/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const BookClubMembersComponent = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <ul className='list-group'>
                {/*temporary until we have backend set up*/}
                {/*currently just all users*/}
                {
                    users.map((user) =>
                        <li key={user._id} className={"list-group-item"}>
                            <Link to={`/profile/${user._id}`}>{user.username}</Link>
                        </li>)
                }
            </ul>
        </>
    )
}

export default BookClubMembersComponent;