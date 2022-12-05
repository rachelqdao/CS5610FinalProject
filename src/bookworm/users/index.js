import React, {useEffect} from "react"
import {findAllUsersThunk} from "./users-thunks";
import {useDispatch, useSelector} from "react-redux";

const UsersComponent = () => {
    const {users, loading} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    return (
        <>
            <h1>Users {users.length}</h1>
            <h1>loading: {loading}</h1>
            <ul className={"list-group"}>
                {
                    users.map((user) =>
                        <li key={user._id} className={"list-group-item"}>
                            {user.username}
                        </li>)
                }
            </ul>
        </>
    )
}

export default UsersComponent