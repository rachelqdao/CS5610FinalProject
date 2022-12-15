import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const LatestReviewComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const [latestReview, setLatestReview] = useState(null)
    const [hasReviews, setHasReviews] = useState(false)

    useEffect(() => {

        if (reviews[reviews.length - 1] === undefined) {
            console.log('no latest reviews')
            setHasReviews(false)

        } else {
            setHasReviews(true)
            setLatestReview(reviews[reviews.length - 1])
        }

    }, [reviews, latestReview])

    return (
        currentUser
            ?
            // TODO: show the USERS latest review
            <div>
                {/*header*/}
                <h3 className={"fw-bold mb-1"}>📖 Jump Back In</h3>
                <p className={"text-secondary"}>See what users are saying about this book you recently reviewed</p>

                <div className={"mb-3"}>
                    {/*book cover*/}
                    <div className={"row"}>
                        <div className={"col-3"}></div>
                        <div className={"col-6"}>
                            <img
                                src={"https://books.google.com/books/publisher/content/images/frontcover/Tz_aCwAAQBAJ?fife=w400-h600&source=gbs_api"}
                                className={'img-fluid w-100 rounded mb-3'}
                                alt={"Cover Thumbnail"}
                            />
                        </div>
                        <div className={"col-3"}></div>
                    </div>

                    {/*title and authors*/}
                    <div>
                        <h5 className={"d-flex justify-content-center fw-bold m-0"}>Book Title Here</h5>
                        <h6 className={"d-flex justify-content-center fw-bold m-0 text-secondary"}>Authors Here</h6>
                    </div>
                </div>

                <hr/>

                <h5 className={"fw-bold wd-green"}>Your Review: </h5>

                {
                    hasReviews &&
                    <div>
                        <div className={"d-flex justify-content-center"}>
                            {
                                latestReview.rating === 1 &&
                                <span>⭐</span>
                            }

                            {
                                latestReview.rating === 2 &&
                                <span>⭐⭐</span>
                            }

                            {
                                latestReview.rating === 3 &&
                                <span>⭐⭐⭐</span>
                            }

                            {
                                latestReview.rating === 4 &&
                                <span>⭐⭐⭐⭐</span>
                            }

                            {
                                latestReview.rating === 5 &&
                                <span>⭐⭐⭐⭐⭐</span>
                            }
                        </div>
                        <h5 className={"d-flex justify-content-center m-0 mb-2 px-3 fst-italic text-secondary"}>
                            {latestReview.reviewText}
                        </h5>
                        <h5 className={"d-flex justify-content-center fw-bold m-0 wd-green"}>
                            <i className="bi bi-chat-square-quote-fill fs-3 wd-pink me-2"></i>
                            {latestReview.userID.username}
                        </h5>
                    </div>
                }
            </div>
        :
            // TODO: show ANY latest review
            <div>
                {/*header*/}
                <h3 className={"fw-bold mb-1"}>📖 Latest Reviews </h3>
                <p className={"text-secondary"}>See what users are saying about this book</p>

                <div className={"mb-3"}>
                    {/*book cover*/}
                    <div className={"row"}>
                        <div className={"col-3"}></div>
                        <div className={"col-6"}>
                            <img
                                src={"https://books.google.com/books/publisher/content/images/frontcover/Tz_aCwAAQBAJ?fife=w400-h600&source=gbs_api"}
                                className={'img-fluid w-100 rounded mb-3'}
                                alt={"Cover Thumbnail"}
                            />
                        </div>
                        <div className={"col-3"}></div>
                    </div>

                    {/*title and authors*/}
                    <div>
                        <h5 className={"d-flex justify-content-center fw-bold m-0"}>Book Title Here</h5>
                        <h6 className={"d-flex justify-content-center fw-bold m-0 text-secondary"}>Authors Here</h6>
                    </div>
                </div>

                <hr/>

                <h5 className={"d-flex justify-content-center m-0 px-3 fst-italic text-secondary"}>
                    "I loved this book it was so cute :) Really long review typing test"
                </h5>
                <h5 className={"d-flex justify-content-center fw-bold m-0 wd-green"}>
                    <i className="bi bi-chat-square-quote-fill fs-3 wd-pink me-2"></i>
                    alice
                </h5>
            </div>
    )
}

export default LatestReviewComponent