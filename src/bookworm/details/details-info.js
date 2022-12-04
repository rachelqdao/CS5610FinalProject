import React from "react";
import {useSelector} from "react-redux";

const DetailsInfoComponent = () => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)

    return (
        <>
            {
                loading === true
                    ? <h1>Loading...</h1>
                    : bookDetails &&
                        <div className={"d-flex d-inline-block mb-5"}>

                            {/*book cover*/}
                            {
                                bookDetails.volumeInfo.imageLinks
                                    ? <img
                                        src={bookDetails.volumeInfo.imageLinks.thumbnail}
                                        className={"me-4 h-100 w-50"}
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
                                <button className={"btn btn-primary me-3"}>
                                    <i className="bi bi-star"> </i>
                                    Add to Favorites
                                </button>

                                <button className={"btn btn-primary me-3"}>
                                    <i className="bi bi-bookmark-plus"> </i>
                                    Add to Reading List
                                </button>

                                <button className={"btn btn-primary"}>
                                    <i className="bi bi-chat-square-text"> </i>
                                    Leave a Review
                                </button>
                            </div>
                        </div>
            }
        </>
    )
}

export default DetailsInfoComponent