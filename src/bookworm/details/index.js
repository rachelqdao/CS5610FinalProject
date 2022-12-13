import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findBookByIDThunk} from "./services/details-thunks";
import {findReviewsByBookIDThunk} from "../reviews/services/reviews-thunk";
import DescriptionComponent from "./description";
import DetailsInfoComponent from "./details-info";
import ReviewsFormComponent from "../reviews/reviews-form";
import ReviewItemComponent from "../reviews/review-item";
import BrowseToReview from "../reviews/browse-to-review";

const DetailsComponent = ({showBrowseToReview = false}) => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)
    const [searchParams] = useSearchParams({identifier: ''})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByIDThunk(searchParams.get('identifier')))
        dispatch(findReviewsByBookIDThunk(searchParams.get('identifier')))
    }, [])

    return (
        <>
            {
                loading === true
                    ? <h1>Loading...</h1>
                    : bookDetails &&
                    <>
                        <div className={"row mb-5"}>

                            {/*left gutter column*/}
                            <div className={"d-none d-xl-flex col-1"}></div>

                            {/*left column*/}
                            <div className={"d-none d-lg-block col-4 col-xl-3 pe-4"}>

                                {/*book cover on lg, xl and xxl screens*/}
                                <img
                                    src={bookDetails.bookCover}
                                    className={'img-fluid w-100 rounded mb-3'}
                                    alt={"Cover Thumbnail"}
                                />

                                {/*user / book club information*/}
                                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                                    <div className={"wd-pink mb-3"}>
                                        This book is in <span className={"fw-bold"}>10 reading lists</span> and <span className={"fw-bold"}>10 Book Clubs</span>!
                                    </div>
                                </div>
                            </div>

                            {/*right column*/}
                            <div className={"col-12 col-lg-8 col-xl-7"}>
                                {/*details info w/ reading list form*/}
                                <DetailsInfoComponent/>

                                {/*description box*/}
                                <DescriptionComponent/>

                                <hr/>

                                {/*reviews*/}
                                <ReviewsFormComponent/>

                                <ReviewItemComponent/>
                            </div>

                            {/*right gutter column*/}
                            <div className={"d-none d-xl-flex col-1"}></div>
                        </div>
                    </>
            }
        </>
    )
}
export default DetailsComponent