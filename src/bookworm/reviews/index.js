import React from "react";
import ReviewItemComponent from "./review-item";

const ReviewsComponent = () => {
    return (
        <>

            <div className={"row mb-5"}>
                <div className={"d-none d-xl-flex col-1"}></div>
                <div className={"col-12 col-xl-10"}>

                    <hr/>

                    {/*header*/}
                    <div>
                        <button className={"btn btn-lg btn-primary me-2 mb-2 float-end"}>
                            <i className="bi bi-chat-square-text"> </i>
                            Leave a Review
                        </button>

                        <div className={"mb-4"}>
                            <h3 className={"mb-1 fw-bold"}>User Reviews</h3>
                            <h5 className={"text-secondary"}>123 Reviews</h5>
                        </div>
                    </div>

                    <ReviewItemComponent/>
                    <ReviewItemComponent/>
                </div>
                <div className={"d-none d-xl-flex col-1"}></div>
            </div>
        </>
    )
}
export default ReviewsComponent