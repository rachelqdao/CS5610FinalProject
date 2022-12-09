import React from "react";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

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