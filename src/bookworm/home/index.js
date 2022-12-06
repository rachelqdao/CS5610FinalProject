import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../users/users-thunks";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    })

    return (
        <>
            <h1>Home</h1>

            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }

            <div>
                Popular Books
            </div>

            <div>
                Recently Added Books
            </div>

            <div>
                Recent Reviews
            </div>
        </>
    )
};
export default HomeComponent;