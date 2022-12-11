import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findBookByIDThunk} from "./services/details-thunks";
import ReviewsComponent from "../reviews";

const DetailsComponent = () => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)
    const [searchParams] = useSearchParams({identifier: ''})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByIDThunk(searchParams.get('identifier')))
    }, [searchParams, dispatch])

    return (
        <>
            <div className={"row"}>
                <div className="d-block d-sm-none fa-2x">XS</div>
                <div className="d-none d-sm-block d-md-none fa-2x">S</div>
                <div className="d-none d-md-block d-lg-none fa-2x">M</div>
                <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
                <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
                <div className="d-none d-xxl-block fa-2x">XXL</div>
            </div>

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

                                {/*book details*/}
                                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                                    {/*book cover on xs, sm and md screens*/}
                                    <div className={"row d-lg-none d-lg-block mb-3"}>
                                        <div className={"col-4"}></div>
                                        <div className={"col-4"}>
                                            <img
                                                src={bookDetails.bookCover}
                                                className={'img-fluid w-100 rounded'}
                                                alt={"Cover Thumbnail"}
                                            />
                                        </div>
                                        <div className={"col-4"}></div>
                                    </div>

                                    {/*title and authors on lg, xl and xxl screens*/}
                                    <div className={"d-none d-lg-block mb-3"}>
                                        <h3 className={"fw-bolder"}>{bookDetails.volumeInfo.title}</h3>
                                        {
                                            bookDetails.volumeInfo.authors
                                                ? <h5 className={"text-secondary fw-bold"}>{bookDetails.volumeInfo.authors.join(', ')}</h5>
                                                : <h5 className={"text-secondary fw-bold"}>No authors available</h5>
                                        }
                                    </div>

                                    {/*title and authors on xs, sm and md screens*/}
                                    <div className={"d-lg-none mb-3"}>
                                        <h3 className={"d-flex justify-content-center fw-bolder"}>{bookDetails.volumeInfo.title}</h3>
                                        {
                                            bookDetails.volumeInfo.authors
                                                ? <h5 className={"d-flex justify-content-center text-secondary fw-bold"}>{bookDetails.volumeInfo.authors.join(', ')}</h5>
                                                : <h5 className={"d-flex justify-content-center text-secondary fw-bold"}>No authors available</h5>
                                        }
                                    </div>

                                    {/*other details*/}
                                    <div className={"mb-3"}>
                                        <span className={"fw-bold wd-green"}>Details:</span>
                                        {
                                            bookDetails.volumeInfo.publisher
                                                ? <div className={"text-secondary"}>
                                                    <span className={"fw-bold"}>Published by:</span> {bookDetails.volumeInfo.publisher}, {bookDetails.volumeInfo.publishedDate}
                                                </div>
                                                : null
                                        }
                                        {
                                            bookDetails.volumeInfo.industryIdentifiers
                                                ? <div className={"text-secondary"}>
                                                    <span className={"fw-bold"}>ISBN:</span> {bookDetails.volumeInfo.industryIdentifiers[0].identifier}
                                                </div>
                                                : null
                                        }
                                        {
                                            bookDetails.volumeInfo.pageCount
                                                ? <div className={"text-secondary"}>
                                                    <span className={"fw-bold"}>Page Count:</span> {bookDetails.volumeInfo.pageCount}
                                                </div>
                                                : null
                                        }
                                    </div>

                                    {/*buttons*/}
                                    <div className="input-group col-12 col-lg-6">
                                        <select className="form-select" id="inputGroupSelect03"
                                                aria-label="Example select with button addon">
                                            <option selected>Choose a Reading List</option>
                                            <option value="1">Fiction</option>
                                            <option value="2">Nonfiction</option>
                                            <option value="3">Fantasy</option>
                                        </select>

                                        <button className="btn btn-primary" type="button"><i className="bi bi-bookmark-plus"> </i>
                                            Add to Reading List</button>
                                    </div>
                                </div>

                                {/*description box*/}
                                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-5"}>
                                    <div>
                                        <span className={"fw-bold wd-green"}>Description</span>
                                        {
                                            bookDetails.volumeInfo.description
                                                ? <div className={"mt-1 mb-3"}
                                                       dangerouslySetInnerHTML={{__html: bookDetails.volumeInfo.description}}>
                                                </div>
                                                : <div className={"mt-1 mb-3"}>No description available</div>
                                        }
                                    </div>
                                </div>

                                <hr/>
                                <ReviewsComponent/>
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