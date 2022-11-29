import React from "react";
import {useSelector} from "react-redux";

const DetailsInfoComponent = () => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)

    return (
        <>
            {
                loading === true ?
                    <h1>Loading...</h1> :
                    bookDetails &&
                    <div className={"d-flex d-inline-block mb-5"}>
                        <img
                            src={bookDetails.volumeInfo.imageLinks.thumbnail}
                            className={"me-4 h-50 w-50"}
                            alt={"book cover"}
                        />
                        <div>
                            <div className={"mb-3"}>
                                <h1 className={"fw-bolder"}>{bookDetails.volumeInfo.title}</h1>
                                <h4 className={"text-secondary"}>{bookDetails.volumeInfo.authors.join(', ')}</h4>
                            </div>
                            <div className={"mb-3"} dangerouslySetInnerHTML={{__html: bookDetails.volumeInfo.description}}>
                            </div>

                            <div className={"mb-3"}>
                                {/*// eslint-disable-next-line*/}
                                <div className={"text-secondary"}>Published by: {bookDetails.volumeInfo.publisher} on {new Date(bookDetails.volumeInfo.publishedDate.replace(/-/g, '\/')).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"})}</div>
                                <div className={"text-secondary"}>ISBN: {bookDetails.volumeInfo.industryIdentifiers[0].identifier}</div>
                                <div className={"text-secondary"}>Page Count: {bookDetails.volumeInfo.pageCount}</div>
                            </div>

                            <button className={"btn btn-primary me-3"}>
                                <i className="bi bi-plus"> </i>
                                Add to Reading List
                            </button>

                            <button className={"btn btn-primary me-3"}>
                                <i className="bi bi-plus"> </i>
                                Add to Finished Books
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