import {createReviewThunk} from "./services/reviews-thunk";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import ReviewItemComponent from "./review-item";


const ReviewsFormComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const [bookID] = useSearchParams({identifier: ''})

    const [canLeaveReview, setCanLeaveReview] = useState(false)
    const [rating, setRating] = useState(3)
    const [reviewText, setReviewText] = useState('')
    const [review, setReview] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReviewBtnClick = () => {
        if (currentUser) {
            setCanLeaveReview(true)
        } else (
            navigate('/login')
        )
    }

    useEffect(() => {
            setReview({'rating': rating, 'reviewText': reviewText, 'bookID': bookID.get('identifier')})
        }, [rating, reviewText, bookID]
    )

    return (<>
        <div>
            {/*show 'leave review' button if not clicked yet, disappear on click if user is logged in*/}
            {   (currentUser === null || currentUser.userType !== 'ADMIN') && !canLeaveReview &&
                <>
                    <button
                        className={"btn btn-primary me-2 mb-2 float-end"}
                        onClick={handleReviewBtnClick}
                    >
                        <i className="bi bi-chat-square-text"> </i>
                        Write a Review
                    </button>
                </>
            }

            {/*header and number of reviews*/}
            <div className={"mb-4"}>
                <h3 className={"mb-1 fw-bold"}>User Reviews</h3>
                <h5 className={"text-secondary"}>{reviews.length} Reviews</h5>

            </div>

            {/*show form if button clicked and user is logged in, disappear if user submits and successfully
                    rev*/}
            {
                currentUser && canLeaveReview &&
                <div className={"row"}>
                    <div className={"mb-5"}>
                        <div className="mb-3">

                            {/*review form*/}
                            <div>

                                {/*select rating*/}
                                <label
                                    htmlFor="rating"
                                    className="form-label fw-bold wd-green"
                                >
                                    Select a Rating:
                                </label>

                                {/*TODO: change highlight color*/}
                                <select
                                    className="form-select mb-3"
                                    id={"rating"}
                                    onChange={(e) => setRating(Number(e.target.value))}
                                    defaultValue={3}
                                >
                                    <option value={1}>⭐</option>
                                    <option value={2}>⭐⭐</option>
                                    <option value={3}>⭐⭐⭐</option>
                                    <option value={4}>⭐⭐⭐⭐</option>
                                    <option value={5}>⭐⭐⭐⭐⭐</option>
                                </select>

                                <label htmlFor="reviewText" className="form-label fw-bold wd-green">Write a Review:</label>
                                <textarea
                                    className="form-control"
                                    id="reviewText"
                                    rows="3"
                                    onChange={(e) => setReviewText(e.target.value)}
                                >
                                        </textarea>

                            </div>
                        </div>
                        <button
                            className={"btn btn-primary float-end"}
                            onClick={() => {
                                dispatch(createReviewThunk(review))
                                setCanLeaveReview(false)
                            }
                            }
                        >
                            Submit
                        </button>
                    </div>
                </div>
            }
        </div>
        </>
    )
}

export default ReviewsFormComponent