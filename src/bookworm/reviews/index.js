import React, {useEffect} from "react";
import ReviewItemComponent from "./review-item";
import "./index.css"
import ReviewsFormComponent from "./reviews-form";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByBookIDThunk} from "./services/reviews-thunk";
import {useSearchParams} from "react-router-dom";

const ReviewsComponent = () => {
    const {reviews} = useSelector((state) => state.reviews)
    const [bookID] = useSearchParams({identifier: ''})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsByBookIDThunk(bookID.get('identifier')))
    })

    return (
        <>
            <div>
                <ReviewsFormComponent/>

                {/*TODO: map reviews to reviews item components here*/}
                {
                    reviews &&
                    reviews.map((review) => ReviewItemComponent(review))
                }

            </div>
        </>
    )
}
export default ReviewsComponent