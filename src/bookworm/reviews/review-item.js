import React from "react";
import {Link} from "react-router-dom";
import {deleteReviewThunk} from "./services/reviews-thunk";

const ReviewItemComponent = (review, currentUser, dispatch) => {

    return (
        <>
            <div className={"mb-3"}>
                <div className={"bg-white border border-dark border-2 border-opacity-10 rounded p-4 w-100"}>

                    {/*date and time*/}
                    <div className={"float-end text-end"}>
                        <p className={"text-secondary m-0"}>{review.datePosted}</p>
                        <p className={"text-secondary m-0"}>{review.timePosted}</p>
                    </div>

                    <div>
                        <div className={"mb-3"}>
                            {/*username*/}
                            <Link to={`/profile/${review.userID._id}`}>
                                <h5 className={"fw-bold wd-green m-1 ms-0"}>{review.userID.username}</h5>
                            </Link>

                            {/*user rating*/}
                            <div>
                                {
                                    review.rating === 1 &&
                                    <span className={"text-secondary"}>Rating: ⭐ (1/5)</span>
                                }

                                {
                                    review.rating === 2 &&
                                    <span className={"text-secondary"}>Rating: ⭐⭐ (2/5)</span>
                                }

                                {
                                    review.rating === 3 &&
                                    <span className={"text-secondary"}>Rating: ⭐⭐⭐ (3/5)</span>
                                }

                                {
                                    review.rating === 4 &&
                                    <span className={"text-secondary"}>Rating: ⭐⭐⭐⭐ (4/5)</span>
                                }

                                {
                                    review.rating === 5 &&
                                    <span className={"text-secondary"}>Rating: ⭐⭐⭐⭐⭐ (5/5)</span>
                                }
                            </div>
                        </div>

                        {/*user review*/}
                        {
                            review.reviewText &&
                            <p className={"m-0"}>
                                {review.reviewText}
                            </p>
                        }

                        <div className={"row"}>
                            {
                                currentUser && currentUser.userType === 'ADMIN' &&
                                <div>

                                    {/*TODO: fix styling so button isn't green :(*/}
                                    <button
                                        className="btn btn-primary float-end"
                                        onClick={() => {
                                            console.log(review._id)
                                            dispatch(deleteReviewThunk(review._id))
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItemComponent