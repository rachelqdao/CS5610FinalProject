import React, {useEffect} from "react";
import ReviewItemComponent from "./review-item";
import ReviewsFormComponent from "./reviews-form";
import BrowseToReview from "./browse-to-review";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByBookIDThunk} from "./services/reviews-thunk";
import {useSearchParams} from "react-router-dom";

const ReviewsComponent = ({showBrowseToReview = false}) => {
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
                { showBrowseToReview ? <BrowseToReview/> : <ReviewsFormComponent/> }

                {
                    reviews &&
                    reviews.map((review) => ReviewItemComponent(review, currentUser, dispatch))
                }

            </div>
        </>
    )
}
export default ReviewsComponent