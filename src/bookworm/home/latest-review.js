import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBookByIDThunk} from "../details/services/details-thunks";

const LatestReviewComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)

    const [hasReviews, setHasReviews] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        // query reviews store, if undefined there are NO reviews at all
        if (reviews[reviews.length - 1] === undefined) {
            setHasReviews(false)

        // otherwise, set the latest review to be the latest review in whatever is in the reviews store
        // could be from either user reviews or from all reviews,
            // doesn't matter bc we already dispatched the right one earlier based on if user was logged in
        } else {
            setHasReviews(true)
            console.log(reviews[reviews.length - 1].bookID)
        }
    }, [reviews])

    useEffect(() => {
        if (hasReviews) {
            dispatch(findBookByIDThunk(reviews[reviews.length - 1].bookID))
        }
    }, [hasReviews, reviews, dispatch])

    return (
        <>
            {currentUser
                ?
                    <>
                        <h3 className={"fw-bold mb-1"}>📖 Jump Back In</h3>
                        <p className={"text-secondary"}>See what users are saying about this book you recently reviewed</p>
                    </>
                :
                    <>
                        <h3 className={"fw-bold mb-1"}>📖 Latest Reviews </h3>
                        <p className={"text-secondary"}>See what users are saying about this book</p>
                    </>
            }

            {
                hasReviews
                ?
                    <>
                        {/*TODO: having trouble getting book details from id here*/}
                        <hr/>
                        <h5 className={"fw-bold wd-green"}>Your Review: </h5>
                        <div>
                            {JSON.stringify(reviews[reviews.length - 1])}
                        </div>
                    </>
                :
                    currentUser
                    ?
                        <>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                You haven't made any reviews yet!
                            </p>
                        </>
                    :
                        <>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-0 px-3"}>
                                There aren't any reviews yet!
                            </p>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                Create an account and be the first to leave a review 🥳
                            </p>
                        </>

            }

        </>
    )
}

export default LatestReviewComponent