import React, {useState} from "react";
import ReviewItemComponent from "./review-item";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./index.css"

const ReviewsComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [canLeaveReview, setCanLeaveReview] = useState(false)

    const navigate = useNavigate()
    const handleReviewBtnClick = () => {
        if (currentUser) {
            setCanLeaveReview(true)
        } else (
            navigate('/login')
        )
    }

    return (
        <>
            <div>
                <div>
                    {/*show 'leave review' button if not clicked yet, disappear on click if user is logged in*/}
                    {    !canLeaveReview &&
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
                        <h5 className={"text-secondary"}>123 Reviews</h5>
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

                                        <select className="form-select mb-3" id={"rating"}>
                                            <option value="1">⭐</option>
                                            <option value="2">⭐⭐</option>
                                            <option value="3">⭐⭐⭐</option>
                                            <option value="4">⭐⭐⭐⭐</option>
                                            <option value="5">⭐⭐⭐⭐⭐</option>
                                        </select>

                                        <label htmlFor="reviewText" className="form-label fw-bold wd-green">Write a Review:</label>
                                        <textarea className="form-control" id="reviewText" rows="3"></textarea>

                                    </div>
                                </div>
                                <button className={"btn btn-primary float-end"}>Submit</button>
                            </div>
                        </div>
                    }
                </div>

                {/*TODO: map reviews to reviews item components here*/}

                <ReviewItemComponent/>
                <ReviewItemComponent/>

            </div>
        </>
    )
}
export default ReviewsComponent