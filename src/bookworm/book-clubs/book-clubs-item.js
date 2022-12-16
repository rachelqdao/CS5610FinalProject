import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

const BookClubsItemComponent = () => {
    const {bookClubs} = useSelector((state) => state.bookClubs)

    const currentBookClub = bookClubs[0]

    return (
        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
            <h5 className={"wd-green fw-bold"}>{`${currentBookClub.name}`}</h5>
            <h5 className={"wd-pink fw-bold"}>Members:</h5>
            <ul className='list-group'>
                {
                    currentBookClub.members &&
                    currentBookClub.members.map((member) => {
                        return (
                            <li key={member._id} className={"list-group-item"}>
                                <Link to={`/profile?id=${member._id}`}>{member.username}</Link>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}
export default BookClubsItemComponent