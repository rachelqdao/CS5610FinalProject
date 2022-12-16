import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

const BookClubsItemComponent = () => {
    const {bookClubs} = useSelector((state) => state.bookClubs)
    return (
        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
            <h5 className={"wd-green fw-bold"}>{`${bookClubs.name}`}</h5>
            <h5 className={"wd-pink fw-bold"}>Current Book:</h5>

            {/*TODO: PLACEHOLDER FROM HOME PAGE*/}
            {

                    <>
                    <div className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 text-secondary"}>
                        <div className={"row"}>
                            <div className={"col-4"}></div>
                            <div className={"col-4"}>
                                <img
                                    src={"http://books.google.com/books/content?id=zM-vZ-JiSFYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
                                    className={'img-fluid w-100 rounded'}
                                    alt={"Cover Thumbnail"}
                                />
                            </div>
                            <div className={"col-4"}></div>
                        </div>
                    </div>

                    <h5 className={"d-flex fw-bold justify-content-center m-0 px-3"}>
                        Book Title Here
                    </h5>

                    <h5 className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 text-secondary"}>
                        Authors Here
                    </h5>
                    </>
            }

            <h5 className={"wd-pink fw-bold"}>Members:</h5>
            <ul className='list-group'>
                {
                    bookClubs.members &&
                    bookClubs.members.map((member) => {
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