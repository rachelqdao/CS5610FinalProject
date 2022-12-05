import React from "react";
import {useSelector} from "react-redux";

const DetailsInfoComponent = () => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)

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
                        <div className={"d-block d-md-flex mb-5"}>
                            {/*book cover*/}
                            {
                                bookDetails.volumeInfo.imageLinks
                                    ? <img
                                        src={bookDetails.volumeInfo.imageLinks.thumbnail}
                                        className={"me-4 mb-4 h-100 w-50"}
                                        alt={"Cover Thumbnail"}
                                      />
                                    : null
                            }

                            {/*book details*/}
                            <div>

                                {/*title and authors*/}
                                <div className={"mb-3"}>
                                    <h1 className={"fw-bolder"}>{bookDetails.volumeInfo.title}</h1>
                                    {
                                        bookDetails.volumeInfo.authors
                                            ? <h4 className={"text-secondary"}>{bookDetails.volumeInfo.authors.join(', ')}</h4>
                                            : <h4 className={"text-secondary"}>No authors available</h4>
                                    }
                                </div>

                                {/*description*/}
                                {
                                    bookDetails.volumeInfo.description
                                        ? <div className={"mb-3"}
                                           dangerouslySetInnerHTML={{__html: bookDetails.volumeInfo.description}}>
                                        </div>
                                        : <div className={"mb-3"}>No description available</div>
                                }

                                {/*other information*/}
                                <div className={"mb-3"}>
                                    {
                                        bookDetails.volumeInfo.publisher
                                            ? <div className={"text-secondary"}>
                                                Published by: {bookDetails.volumeInfo.publisher}, {bookDetails.volumeInfo.publishedDate}
                                              </div>
                                            : null
                                    }

                                    {
                                        bookDetails.volumeInfo.industryIdentifiers
                                            ? <div className={"text-secondary"}>
                                                ISBN: {bookDetails.volumeInfo.industryIdentifiers[0].identifier}
                                              </div>
                                            : null
                                    }

                                    {
                                        bookDetails.volumeInfo.pageCount
                                            ? <div className={"text-secondary"}>
                                                Page Count: {bookDetails.volumeInfo.pageCount}
                                              </div>
                                            : null
                                    }
                                </div>

                                {/*buttons*/}

                                <div>
                                    <button className={"btn btn-primary me-2 mb-sm-2 d-block d-md-inline-block"}>
                                        <i className="bi bi-star"> </i>
                                        Add to Favorites
                                    </button>

                                    <button className={"btn btn-primary me-2 mb-sm-2 d-block d-md-inline-block"}>
                                        <i className="bi bi-bookmark-plus"> </i>
                                        Add to Reading List
                                    </button>

                                    <button className={"btn btn-primary me-2 mb-sm-2 d-block d-md-inline-block"}>
                                        <i className="bi bi-chat-square-text"> </i>
                                        Leave a Review
                                    </button>
                                </div>
                            </div>
                        </div>
            }
        </>
    )
}

export default DetailsInfoComponent