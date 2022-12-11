import React, {useEffect} from "react";
import ReviewItemComponent from "./review-item";
import ReviewsFormComponent from "./reviews-form";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByBookIDThunk} from "./services/reviews-thunk";
import {useSearchParams} from "react-router-dom";

const ReviewsComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const [bookID] = useSearchParams({identifier: ''})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsByBookIDThunk(bookID.get('identifier')))
    }, [reviews, bookID, dispatch])

    return (
        <>
            <div>
                <ReviewsFormComponent/>

                {
                    reviews &&
                    reviews.map((review) => ReviewItemComponent(review, currentUser, dispatch))
                }

            </div>
        </>
    )
}
export default ReviewsComponent